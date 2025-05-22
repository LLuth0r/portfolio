import P1 from "./P1.png";
import GALogo from "./generalassembly-logo.webp"
import "./Card1.css";

export default function Card1() {
	return (
		<div className="card">
			<img className="card-img" 
					 src={GALogo}
					 alt="General Assembly Project" />
			<h3 className="title">
				<a className='title-link'
					 href='https://generalassemb.ly/'>
					General Assembly
				</a>
			</h3>
			<div className="card-desc">
				During my tenure at General Assembly's Software Engineering Immersive, I was tasked with learning and building
				web applications utilizing React, Javascript, Node.js, MongoDB, Express.js and Ruby on Rails.  I spent a lot of time
				integrating API's, designing web apps utilizing Figma diagrams, and finally building custom apps to demonstrate the 
				knowledge I had gained.
			</div>
			<div className='git-link'></div>
		</div>
	);
}
