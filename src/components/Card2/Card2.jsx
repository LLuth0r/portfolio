import React from "react";
import "../Card1/Card1.css";
import P2 from "./P2.png";

export default function Card2() {
	return (
		<div class="card">
			<img className="card2-img" src={P2} alt="" />
			<h3 class="title"><a class='title-link'href='https://vacation-funds.netlify.app'>Vacation Fund$</a></h3>
			<div className="card-desc">Vacation Fund$ is a budgeting application to help the user find extra spending money.  Utilizes Airtable & React. </div>
		</div>
	);
}
