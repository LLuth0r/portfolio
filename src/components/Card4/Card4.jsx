import React from 'react';
import Beacon from './Beacon-Logo.png';
import '../Card1/Card1.css';

export default function Card4() {
	return (
		<div className='card'>
			<img className='card4-img' 
					 src={Beacon} 
					 alt='Beacon-Logo' />
			<h3 className='title'>
				<a className='title-link'
				   href='https://www.beaconinteractive.com/'>
					Beacon Interactive Systems
				</a>
			</h3>
			<div className='card-desc'>
				Beacon Interactive is a DoD contractor supplying software based solutions for the Army, Navy, Airforce & Secretary of Defense.
				I worked on a web application utilizing Angular/Typescript/Ruby on Rails building custom features and components, streamlining
				SQL queries and 
			</div>
			<div className='git-link'></div>
		</div>
	);
}