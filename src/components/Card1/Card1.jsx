import React from "react";
import P1 from "./P1.png";
import "./Card1.css";

export default function Card1() {
	return (
		<div class="card">
			<img className="card1-img" src={P1} alt="" />
			<h3 class="title"><a class='title-link'href='https://lluth0r.github.io/Heroes-and-Villains/'>Heroes & Villains</a></h3>
			<div className="card-desc">A web application utilizing the superhero API, in which you can search for superheroes & villains, do random battles and find a random character.</div>
			<div className='git-link'><a href='https://github.com/LLuth0r/Heroes-and-Villains'>Github</a></div>
		</div>
	);
}
