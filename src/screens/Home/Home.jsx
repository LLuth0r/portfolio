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
						Full-stack developer focused on creating 
						innovative, clean and organized web applications.
					</p>
				</div>
				<div className="engineer">
					<h1>Engineer</h1>
					<p>
						Mechanical/Design engineer with 15 years 
						of product development & design experience.
					</p>
				</div>
				<img className="hero" src={'https://lh3.googleusercontent.com/hpaN01dlgjn7ViUsAa70CSP-yKvw-VGIfyHga98w04BapQjNMC_kEHCoE3MIPuLO467o5y7uq0d1Ozcr5YttwqQglt0Q_9fv1snz8moOAfyj5bWzPsM2Vt1LoQahx0-i0NYUuVVxaYLjWKVBPbm-vaRffDlgCLStxlFND7PA2N-zWldbNYTQoIAVSTVyNZ7kSrrYbh2FnAlHwJ0gDRMbpUqsgGps3t7oRZ8QOujwKw-4avCGn-GAwqTY4UBaZxjwhnJBYmhoPsDSH05hAA-3rdI78FWlnQ_f3WhLHcjj1okohtgPnTkgFUUEFmvmxgMXqRIr--M4tOBe26RRWJdGfm8v9tG8ouIlLjBVO4Y2zc0ZEqhjoac5XzwDA_hVXqkez2bNtJ5h1Mvy59jdi7BSCq8tmmzVhWOLvQhwfesqC7jqNzHj5Ur0VfzZyooBYKjk90Gqt2OGuaDEICMHZMTAeXLRloCJ1HX4_A-6wegb-4stKi8jEc6r4gx-dJlyZ22-1NkedVQ_NYpnpZwomcQxYaX1FZSKNjXWqtoYuMkTr1D1aHbEmFDPEC4OkvTS1A_-dyKLi2eyVaHBSj0_VtNfEM-l82YQCWLbLBkz8HQBPqwUWEAEoA_Xgo9DV0xbbZpfhiWreZIO60Gv2QKZVLldEPdT20yT_2Sf78wcXTBn0_1WKM6_5Bdkl7CDUj4Eg98=w1162-h654-no?authuser=0'} alt="" />
			</Paper>
			<Paper className="about" elevation={3}>
				<div className="text">
					<h1>About Me</h1>
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
				<h1 className="project-title">Projects</h1>
				<div className="projects">			
                        <Card1 />
						<Card2 />
						<Card3 />
						<Card4 />					
				</div>
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
			</Paper>
			<Paper className="contact" elevation={10}>
				<div className="contactform">
					<h1>Send Me an Email</h1>
					<ContactForm />
				</div>
				<div className="collaborate">
					<h1>Interested in Hiring Me?</h1>
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
