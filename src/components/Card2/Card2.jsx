import '../Card1/Card1.css';
import Rugiet_Men from './Rugiet_Men.jpg';
import MSBLogo from './msbholdings-logo.png';

export default function Card2() {
	return (
		<div className='card'>
			<img className='card-img' 
					 src={MSBLogo} 
					 alt='Rugiet-Men' />
			<h3 className='title'>
				<a className='title-link'
					 href='https://www.msbholdingsinc.com/index.html'>
					MSB Holdings, Inc.
				</a>
			</h3>
			<div className='card-desc'>
				MSB Holdings, Inc. & Rugiet Ready are transforming the telehealth market by connecting doctors, patients & pharmacies all
				inside a telehealth platform to make the prescription process simple and convenient.  I worked on the telehealth platform utilizing
				Ruby on Rails/Ruby to build components and features. 
			</div>
			<div className='git-link'></div>
		</div>
	);
}