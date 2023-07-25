import React from 'react';
import Recruitful from './Recruitful-Logo.png';
import '../Card1/Card1.css';

export default function Card3() {
	return (
		<div className='card'>
			<img className='card3-img' 
					 src={Recruitful} 
					 alt='Recruitful-Logo' />
			<h3 className='title'>
				<a className='title-link'
				   href='https://www.recruitful.com/'>
					Recruitful
				</a>
			</h3>
			<div className='card-desc'>
				Recruitful is an agile, integrated recruiting team utilizing automated sourcing platforms, AI & experienced recruiters to fulfill
				a company's hiring needs quickly and efficiently.  I was responsible for integrating web apis, building automation and streamlining
				the technology process so that the recruiters could focus their time on talking to candidates.
			</div>
			<div className='git-link'></div>
		</div>
	);
}