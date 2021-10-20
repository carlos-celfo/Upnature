import React from 'react';
import './Footer.css';
import Footerpicture from '../../images/Footerpicture.png';

function Footer() {
return (
    <div className='footer-container'>
    {/*<div className="footer-first-section"> */}
        {/*<div className='footer-image'> 
        <img src={Footerpicture} alt="People who hold different sight relating to sustainablity"/>
        </div>*/}
        <section className='footer-contact'>
            <p className='footer-contact-heading'>
            Do you have any questions? 
            </p>
            <p className='footer-contact-text'>
            Send us a message
            </p>
            <div className='input-areas'>
            <form>
                <input 
                className='footer-input'
                name='Name'
                type='text'
                placeholder='Your name'
                />
                <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
                />
                <input 
                className='footer-input'
                name='Message'
                type='text'
                placeholder='Your Message'          
                />
                <button className='button' type='submit'>Submit</button>
            </form>
            </div>
        
            </section>
    {/*</div> */}
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
                    <a href='/'>Instagram</a>
                    <a href='/'>Facebook</a>
                    <a href='/'>Twitter</a>
            </div>
        </div>
        </div>

    </div>
);
}

export default Footer;