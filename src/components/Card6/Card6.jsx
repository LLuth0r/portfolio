import DriverReach from './driver-reach.png';
import '../Card1/Card1.css';

export default function Card6() {
	return (
		<div className='card'>
			<img className='card-img card6' 
					 src={DriverReach} 
					 alt='DriverReach Logo' />
			<h3 className='title'>
				<a className='title-link'
				   href='https://www.driverreach.com/'>
					DriverReach
				</a>
			</h3>
			<div className='card-desc'>
				DriverReach is a company that provides a recruiting and compliance management system for the transportation 
        and trucking industry. It helps carriers attract, hire, and retain CDL drivers, and manage ongoing compliance 
        and regulatory requirements.  My role there as a Site Reliability Engineer (SRE) was to ensure the reliability,
        availability, and performance of their systems and applications. I was working on upgrading the technical stack
        to a newer version of Ruby as well as preparing for an upgrade to a newer version of Rails.
			</div>
			<div className='git-link'></div>
		</div>
	);
}