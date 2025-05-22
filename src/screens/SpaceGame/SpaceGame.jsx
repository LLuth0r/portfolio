import { useEffect, useRef } from 'react';

export default function SpaceGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const shipImg = new Image();
    shipImg.src = "/assets/spaceship.png";

    const asteroidImg = new Image();
    asteroidImg.src = "/assets/asteroid.png";

    const planetImg = new Image();
    planetImg.src = "/assets/planet.png";

    const meteorImg = new Image();
    meteorImg.src = "/assets/meteor.png";

    const alienImg = new Image();
    alienImg.src = "/assets/alien.png";

    const enemyShipImg = new Image();
    enemyShipImg.src = "/assets/enemyship.png";

    const images = {
      wife: "/assets/images/bobbie-pixelated.png",
      halo: "/assets/images/halo-pixelated.png",
      girls: "/assets/images/girls-pixelated.png",
      car: "/assets/images/car-pixelated.png",
      lightning: "/assets/images/lightning-pixelated.png",
      nasa: "/assets/images/nasa-pixelated.png",
      pak: "/assets/images/pak-pixelated.png",
      superman: "/assets/images/superman-pixelated.png",
      bermuda: "/assets/images/bermuda-pixelated.jpg",
      fall: "/assets/images/fall-pixelated.jpg",
      music: "/assets/images/music-heart.png",
      kodi: "/assets/images/kodi.png"
    };

    Object.entries(images).forEach(([key, src]) => {
      const img = new Image();
      img.src = src;
      images[key] = img;
    });

    const restartFont = new FontFace('RestartFont', 'url(/assets/fonts/Nabla-Regular.ttf)');
    const flashFont = new FontFace('FlashFont', 'url(/assets/fonts/BungeeSpice-Regular.ttf)');
    const destroyedFont = new FontFace('DestroyedFont', 'url(/assets/fonts/BungeeTint-Regular.ttf)');

    restartFont.load().then((loadedFace) => {
      document.fonts.add(loadedFace);
    });

    flashFont.load().then((loadedFace) => {
      document.fonts.add(loadedFace);
    });

    destroyedFont.load().then((loadedFace) => {
      document.fonts.add(loadedFace);
    });

        const ship = {
      x: canvas.width / 2,
      y: canvas.height - 60,
      width: 40,
      height: 40,
      speed: 5,
      bullets: [],
      isDestroyed: false
    };

    let lastShotTime = 0;
    const shotCooldown = 300;
    let score = 0;
    let countdown = 0;
    let fadeAlpha = 0;
    let isRestarting = false;
    let flashText = null;
    let flashTimer = 0;
    let flashImg = null;
    let flashImgObj = null;

    const objects = [];
    const keys = {};

    const messages = {
      planet: [
        { text: "I love space exploration! Event went to space camp as a kid.", image: images.nasa },
        { text: "In my former life I was a mechanical engineer.", image: images.car },
        { text: "Superman is my favorite superhero!", image: images.superman },
        { text: "My wife is my best friend!", image: images.wife },
      ],
      asteroid: [
        { text: "My favorite season is fall", image: images.fall },
        { text: "Music makes my heart smile.", image: images.music },
        { text: "Bermuda is my favorite place I've ever been to.", image: images.bermuda },
      ],
      meteor: [
        { text: "Dad of 3 amazing girls!", image: images.girls },
        { text: "Husband. Engineer. Nerd.", image: images.pak },
        { text: "Halo is still my favorite video game of all time.", image: images.halo }
      ],
      enemy: [
        { text: "Once owned an Orangetheory Fitness franchise.", image: null },
        { text: "Fun Fact: I have been hit by lightning! Don't recommend.", image: images.lightning },
        { text: "My side project is a Kodi Skin, called ScopeNox.", image: images.kodi },
      ]
    };

    const messageIndex = { planet: 0, asteroid: 0, meteor: 0, enemy: 0 };

    function showFlashMessage(type) {
      const msgList = messages[type];
      if (!msgList || msgList.length === 0) return;

      const index = messageIndex[type] % msgList.length;
      flashText = msgList[index].text;

      const img = msgList[index].image;
      if (img instanceof HTMLImageElement && img.complete && img.naturalWidth > 0) {
        flashImgObj = img;
      } else {
        flashImgObj = null;
      }

      flashTimer = 180;
      messageIndex[type]++;
    }

    function drawFlashText() {
      if (flashText && flashTimer > 0) {
        ctx.fillStyle = 'yellow';
        ctx.font = '24px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        const maxWidth = canvas.width * 0.8;
        const words = flashText.split(' ');
        let line = '';
        const lines = [];

        for (let i = 0; i < words.length; i++) {
          const testLine = line + words[i] + ' ';
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth && line !== '') {
            lines.push(line);
            line = words[i] + ' ';
          } else {
            line = testLine;
          }
        }
        lines.push(line);

        lines.forEach((l, idx) => {
          ctx.fillText(l.trim(), canvas.width / 2, 10 + idx * 28);
        });

        if (flashImgObj && flashImgObj.complete && flashImgObj.naturalWidth > 0) {
          ctx.drawImage(flashImgObj, canvas.width / 2 - 32, 10 + lines.length * 28, 64, 64);
        }

        flashTimer--;
      }
    }

    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.5 + 0.5;
        this.speed = Math.random() * 1 + 0.5;
      }
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      }
    }

    const stars = Array.from({ length: 100 }, () => new Star());

        class GameObject {
      constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;

        if (type === 'planet') {
          this.radius = 80 + Math.random() * 20;
          this.health = Math.ceil(this.radius / 15);
        } else if (type === 'asteroid') {
          this.radius = 30;
          this.health = 2;
        } else if (type === 'enemy') {
          this.radius = 35;
          this.health = 10;
          this.dx = Math.random() < 0.5 ? -1.5 : 1.5;
        } else {
          this.radius = 20;
          this.health = 1;
        }
        this.flashTimer = 0;
      }

      draw() {
        let img;
        if (this.type === 'planet') img = planetImg;
        else if (this.type === 'meteor') img = meteorImg;
        else if (this.type === 'enemy') img = enemyShipImg;
        else if (this.type === 'asteroid') img = asteroidImg;

        if (this.flashTimer > 0) {
          ctx.globalAlpha = 0.5;
        }

        ctx.drawImage(img, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        ctx.globalAlpha = 1;
      }

      update() {
        this.y += 2;
        if (this.type === 'enemy') {
          this.x += this.dx;
          if (this.x < this.radius || this.x > canvas.width - this.radius) {
            this.dx *= -1;
          }
        }
        if (this.flashTimer > 0) this.flashTimer--;
        this.draw();
      }
    }

    function spawnObject() {
      if (!isRestarting) {
        const x = Math.random() * canvas.width;
        const typeChance = Math.random();
        let type;
        if (typeChance < 0.05) type = 'enemy';
        else if (typeChance < 0.1) type = 'planet';
        else if (typeChance < 0.2) type = 'asteroid';
        else type = 'meteor';
        objects.push(new GameObject(x, -20, type));
      }
    }

    function drawShip() {
      if (!ship.isDestroyed) {
        ctx.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
      } else {
        ctx.save();
        ctx.fillStyle = 'red';
        ctx.font = '30px destroyedFont';
        ctx.textAlign = 'center';
        ctx.fillText('💥 Ship Destroyed!', canvas.width / 2, canvas.height / 2);
        ctx.font = '20px destroyedFont';
        ctx.fillText('Press R to Restart', canvas.width / 2, canvas.height / 2 + 40);
        ctx.restore();
      }
    }

    function drawBullets() {
      ship.bullets.forEach((bullet, i) => {
        bullet.x += bullet.vx;
        bullet.y += bullet.vy;
        ctx.fillStyle = 'red';
        ctx.fillRect(bullet.x, bullet.y, 4, 10);
        if (bullet.y < 0 || bullet.x < 0 || bullet.x > canvas.width) ship.bullets.splice(i, 1);
      });
    }

    function detectCollisions() {
      objects.forEach((obj, i) => {
        ship.bullets.forEach((bullet, j) => {
          const dx = obj.x - bullet.x;
          const dy = obj.y - bullet.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < obj.radius) {
            obj.health--;
            ship.bullets.splice(j, 1);

            if (obj.health <= 0) {
              showFlashMessage(obj.type);
              objects.splice(i, 1);

              if (obj.type === 'enemy') score += 100;
              else if (obj.type === 'planet') score += 50;
              else if (obj.type === 'asteroid') score += 20;
              else score += 10;
            }
          }
        });

        const dxShip = obj.x - (ship.x + ship.width / 2);
        const dyShip = obj.y - (ship.y + ship.height / 2);
        const distanceToShip = Math.sqrt(dxShip * dxShip + dyShip * dyShip);

        if (distanceToShip < obj.radius + ship.width / 2 && !ship.isDestroyed) {
          ship.isDestroyed = true;
          objects.splice(i, 1);
        }
      });
    }

    function drawScore() {
      ctx.save();
      ctx.fillStyle = 'white';
      ctx.font = '16px DestroyedFont';
      ctx.textAlign = 'left';
      ctx.fillText('Score: ' + score, 20, 30);
      ctx.restore();
    }

    function drawCountdownOverlay() {
      if (isRestarting) {
        ctx.fillStyle = `rgba(0, 0, 0, ${fadeAlpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (countdown > 0) {
          ctx.save();
          ctx.fillStyle = 'white';
          ctx.font = '60px RestartFont';
          ctx.textAlign = 'center';
          ctx.fillText('Restarting in ' + countdown + '...', canvas.width / 2, canvas.height / 2);
          ctx.restore();
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      drawShip();
      drawBullets();
      objects.forEach(obj => obj.update());
      detectCollisions();
      drawScore();
      drawCountdownOverlay();
      drawFlashText();
      requestAnimationFrame(animate);
    }

    function shootBullet(x, y, vx, vy) {
      if (!ship.isDestroyed) {
        ship.bullets.push({ x, y, vx, vy });
      } else {
        ctx.fillStyle = 'red';
        ctx.font = '30px Arial';
        ctx.fillText('💥 Ship Destroyed!', canvas.width / 2 - 100, canvas.height / 2);
      }
    }

    function triggerRestart() {
      isRestarting = true;
      countdown = 3;
      fadeAlpha = 1;
      let countdownInterval = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
          clearInterval(countdownInterval);
          restartGame();
          isRestarting = false;
        }
      }, 1000);
    }

    function restartGame() {
      ship.x = canvas.width / 2;
      ship.y = canvas.height - 60;
      ship.bullets = [];
      ship.isDestroyed = false;
      objects.length = 0;
      score = 0;
      countdown = 0;
      fadeAlpha = 0;
    }

    function moveShip() {
      if (!ship.isDestroyed || !isRestarting) {
        if (keys['arrowleft'] || keys['a']) {
          ship.x -= ship.speed;
        }
        if (keys['arrowright'] || keys['d']) {
          ship.x += ship.speed;
        }
        if (keys['arrowup'] || keys['w']) {
          ship.y -= ship.speed;
        }
        if (keys['arrowdown'] || keys['s']) {
          ship.y += ship.speed;
        }
        ship.x = Math.max(0, Math.min(canvas.width - ship.width, ship.x));
      }
      requestAnimationFrame(moveShip);
    }

    setInterval(spawnObject, 1500);
    animate();
    moveShip();

    function clearKeys() {
      Object.keys(keys).forEach(key => keys[key] = false);
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function handleKeyDown(e) {
            const key = e.key.toLowerCase();
      keys[key] = true;
      if (key === ' ' && Date.now() - lastShotTime > shotCooldown && !ship.isDestroyed) {
        shootBullet(ship.x + ship.width / 2, ship.y, 0, -7);
        lastShotTime = Date.now();
      }
      if (key === 'r') {
        triggerRestart();
      }
    }

    function handleKeyUp(e) {
            keys[e.key.toLowerCase()] = false;
    }

    function handleMouseClick(e) {
            if (e.button === 0 && Date.now() - lastShotTime > shotCooldown) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const dx = mouseX - (ship.x + ship.width / 2);
        const dy = mouseY - (ship.y + ship.height / 2);
        const length = Math.sqrt(dx * dx + dy * dy);

        const vx = (dx / length) * 7;
        const vy = (dy / length) * 7;

        shootBullet(ship.x + ship.width / 2, ship.y, vx, vy);
        lastShotTime = Date.now();
      }
    }

    window.addEventListener('blur', clearKeys);
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('blur', clearKeys);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('click', handleMouseClick);
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="gameCanvas"
      style={{ width: '100%', height: '100%', display: 'block', backgroundColor: 'black' }}
    />
  );
}
