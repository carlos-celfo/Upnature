import React from 'react';
import './Footer.css';
{/*import Footerpicture from '../../images/Footerpicture.png';*/}

const Footer = () => {
return (
    <div className='footer-container'>
        <div className='footer-links-pages'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                    <a href='#Abproject'>About the project</a>
                    <a href='#Team'>Team</a>
                    <a href='#Impressum'>Impressum</a>
            </div>
            
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Social Media</h2>
                    <a href='#'>Instagram</a>
                    <a href='#'>Facebook</a>
                    <a href='#'>Twitter</a>
            </div>
        </div>
        </div>

    </div>
);
}

export default Footer;