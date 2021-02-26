import React from "react";
import P3 from "./P3.png";
import "../Card1/Card1.css";

export default function Card3() {
	return (
		<div class="card">
			<img className="card3-img" src={P3} alt="" />
			<h3 class="title"><a class='title-link'href='https://geosmin.netlify.app/'>Geosmin</a></h3>
			<div class="card-desc">
				Geosmin is a gourmet mushroom and microgreen urban farm store built with
				MERN stack.
			</div>
			<div className='git-link'><a href='https://github.com/jeri-dilts/geosmin'>Github</a></div>
		</div>
	);
}
