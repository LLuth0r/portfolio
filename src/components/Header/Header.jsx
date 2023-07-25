import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { IconContext } from 'react-icons';



export default function Header() {

    return (
        <div className='navbar'>
            <div className='logo'>
            <Link to='home' duration={500} smooth={true} offset={-125}>
                <div className='logo-text'>p@k</div>
            </Link>
            </div>            
            <div className="links">
                <Link to='about' duration={500} smooth={true} offset={-125}>
                    <div className='nav-about'>About</div>
                </Link>
                <Link to='tech' duration={500} smooth={true} offset={-125}>
                    <div className='nav-projects'>Projects</div>
                </Link>
                <Link to='contact' duration={500} smooth={true}>
                    <div className='nav-contact'>Contact</div>
                </Link>
                <IconContext.Provider value={{size: '2em'}} >
                    <a href='https://www.linkedin.com/in/michael-pakulak-he-him-his-7372a05a/' target='_blank' rel='noreferrer'>
                        <FiLinkedin className='linkedin-icon' />
                    </a>
                    <a href='https://github.com/LLuth0r' target='_blank' rel='noreferrer'>
                        <FiGithub className='git-icon' />
                    </a>
                </IconContext.Provider>
            </div>
        </div>
    )
}
