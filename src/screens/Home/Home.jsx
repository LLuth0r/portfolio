import Paper from '@mui/material/Paper';
import './Home.css';
import Family from './family-pic.jpg';
import Header from '../../components/Header/Header';

//Cards for cards section
import Card1 from '../../components/Card1/Card1';
import Card2 from '../../components/Card2/Card2';
import Card3 from '../../components/Card3/Card3';
import Card4 from '../../components/Card4/Card4';
import Card5 from '../../components/Card5/Card5';
import Card6 from '../../components/Card6/Card6';

import { IconContext } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { SiHeroku } from 'react-icons/si';
import { SiRubyonrails } from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';
import { FaRegCopyright } from 'react-icons/fa';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiDocker } from 'react-icons/si';
import ContactForm from '../../components/ContactForm/ContactForm';
import Resume from './Michael_Pakulak_Resume_2025.pdf';


export default function Home() {
		
	return (
		<div className='home'>
      <Header />
			<Paper className='home-paper' elevation={10}>
				<div className='developer'>
					<h1>Developer</h1>
					<p>
						Full-stack developer focused on creating innovative, clean and organized web applications.
					</p>
				</div>
				<div className='engineer'>
					<h1>Engineer</h1>
					<p>
						Mechanical/Design engineer with 15 years of product development & design experience.
					</p>
				</div>
				<img className='hero' 
				     src={'https://images.unsplash.com/photo-1541185934-01b600ea069c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'} 
						 alt='' />
			</Paper>
			<Paper className='about' elevation={3}>
				<div className='text'>
					<h1>About Me</h1>
					<h3>Hi, my name is Mike Pakulak, aka Pak.  <br/>
              I'm a Mechanical Engineer turned Software Developer.
					</h3>
					<p>
						I have a passion for problem solving and design. I welcome new challenges and strive for innovation, excellence, and 
						continuous growth. In my former life, I was a product engineer working on components that served both the DoD & the Automotive world.
						Now I've switched over to software engineering as it aligns with my passion for technology.  I love the challenges that come with
						building new features and components and enjoy the continuous learning that software development brings.
						<br></br>
						<br></br>
						In my personal life I'm a dad to 3 beautiful daughters and a husband to an amazing wife who has supported every endeavor I've embarked on.
						They keep me on my toes and always evolving to be a better person for them.
					</p>
				</div>
				<div className='family'>
				<img className='family-pic' src={Family} alt='' />
				</div>
			</Paper>
			<Paper className='tech' elevation={3}>
				<h1 className='project-title'>Software Development Experience</h1>
				<div className='projects'>
					<Card1 />
					<Card2 />
					<Card3 />
					<Card4 />
          <Card5 />
          <Card6 />
				</div>
				<h1 className='icon-title'>Technologies</h1>
				<div className='icons'>
					<IconContext.Provider	value={{ size: '2.5em', className: 'tech-icons' }}>
						<FaAngular />
						<FaReact />
						<SiRubyonrails />
						<FaNodeJs />
						<DiRuby />
						<DiMongodb />
						<SiPostgresql />
						<SiJavascript />
						<SiTypescript />
						<SiHeroku />
						<SiNetlify />
						<SiDocker />
					</IconContext.Provider>
				</div>
			</Paper>
			<Paper className='contact' elevation={10}>
				<div className='contactform'>
					<h1>Send Me an Email</h1>
					<ContactForm />
				</div>
			</Paper>
      <div className='footer'>
				<div>
          <FaRegCopyright />
          <span className='footer-text'>2025 Mike Pakulak</span>
				</div>
				<div>
					<span className='hire-me'>Interested in Hiring Me?</span>
					<a href={Resume} target='_blank' rel='noreferrer'>
					<IconContext.Provider value={{ size: '1.25em' }}>
						<FaCloudDownloadAlt />
						</IconContext.Provider>
					</a>
				</div>
      </div>
		</div>
	);
}