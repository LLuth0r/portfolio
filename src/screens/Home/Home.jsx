import React from "react";
import Paper from "@material-ui/core/Paper";
import "./Home.css";
import Hero1 from "./hero-image1.jpg";
import Family from "./family-pic.jpg";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiMaterialUi } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { FaRegCopyright } from 'react-icons/fa';
import Card1 from '../../components/Card1/Card1';
import Card2 from '../../components/Card2/Card2';
import Card3 from '../../components/Card3/Card3';
import Card4 from '../../components/Card4/Card4';
import ContactForm from '../../components/ContactForm/ContactForm';
import ResumeCard from '../../components/ResumeCard/ResumeCard';


export default function Home() {
		
	return (
		<div className="home">
			<Paper className="home-paper" elevation={10}>
				<div className="developer">
					<h1>Developer</h1>
					<p>
						Full-stack developer focused on creating <br />
						beautiful, clean and organized web applications.
					</p>
				</div>
				<div className="engineer">
					<h1>Engineer</h1>
					<p>
						Mechanical/Design engineer with 15 years <br />
						of product development & design experience.
					</p>
				</div>
				<img className="hero" src={Hero1} alt="" />
			</Paper>
			<Paper className="about" elevation={3}>
				<div className="text">
					<h1>about me</h1>
					<h3>Hi, my name is Mike Pakulak, aka Pak.  <br/>
                    I'm a Mechanical Engineer turned Software Developer.</h3>
					<p>
						I have a passion for problem solving and design. I welcome new
						challenges and strive for innovation, excellence, and continuous
						growth. With more than 12 years of engineering experience working on
						products like the Jeep Grand Cherokee SRT / Trackhawk, & the Dodge
						RAM TRX at FCA, and designing and developing exterior accessories
						for numerous vehicles at General Motors, I have ample experience in
						the product development lifecycle and working with
						multi-disciplinary teams to create amazing products. My personal
						hobbies include hosting and maintaining a Plex media server,
						designing and 3D printing parts and gadgets, interior & exterior
						design, and building computers/gaming. I’m a jack of all trades with
						a thirst for learning new skill-sets.
					</p>
				</div>
				<div className='family'>
				<img className="family-pic" src={Family} alt="" />
				</div>
			</Paper>
			<Paper className="tech" elevation={3}>
				<h1 className="tech-title">Technologies</h1>
				<div className="icons">
					<IconContext.Provider
						value={{ size: "2.5em", className: "tech-icons" }}
					>
						<FaReact />
						<FaNodeJs />
						<DiRuby />
						<DiMongodb />
						<SiJavascript />
						<SiHeroku />
						<SiMaterialUi />
						<SiNetlify />
					</IconContext.Provider>
				</div>
				<h1 className="project-title">Projects</h1>
				<div className="projects">
					<div className="project-cards">
                        <Card1 />
						<Card2 />
						<Card3 />
						<Card4 />
					</div>
				</div>
			</Paper>
			<Paper className="contact" elevation={10}>
				<div className="contactform">
					<h1>Send me an email</h1>
					<ContactForm />
				</div>
				<div className="collaborate">
					<h1>Interested in hiring me?</h1>
                    <ResumeCard />
				</div>
			</Paper>
            <div className='footer'>
                <FaRegCopyright />
                <h7 className='footer-text'>2021 Mike Pakulak</h7>
            </div>
		</div>
	);
}
