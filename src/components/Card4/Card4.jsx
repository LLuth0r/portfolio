import React from "react";
import P4 from "./P4.png";
import "../Card1/Card1.css";

export default function Card4() {
	return (
		<div class="card">
			<img className="card4-img" src={P4} alt="" />
			<h3 class="title"><a class='title-link'href='https://the-cellar.netlify.app'>The Cellar</a></h3>
			<div class="card-desc">
				The Cellar is a wine lovers bartering app. Users can list their personal
				wine collections for bartering.
			</div>
			<div className='git-link'><a href='https://github.com/LLuth0r/The-Cellar'>Github</a></div>
		</div>
	);
}
