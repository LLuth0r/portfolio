import ZelisLogo from './zelis-logo.png';
import '../Card1/Card1.css';

export default function Card5() {
	return (
		<div className='card'>
      <img className='card-img card5' 
					 src={ZelisLogo} 
					 alt='Zelis Logo' />
			<h3 className='title'>
				<a className='title-link'
				   href='https://www.zelis.com/'>
					Zelis Healthcare
				</a>
			</h3>
			<div className='card-desc'>
				Zelis Healthcare is a technology company specializing in healthcare cost management and payment solutions, 
        providing services to payers, providers, and patients.  My role as a Site Reliability Engineer (SRE) was to ensure
        the reliability, availability, and performance of their systems and applications. I worked on automating processes,
        monitoring system performance, and implementing best practices for incident management and disaster recovery.
			</div>
			<div className='git-link'></div>
		</div>
	);
}