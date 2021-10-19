import React from 'react';
import './Footer.css';

function Footer() {
return (
    <div className='footer-container'>
    <section className='footer-contact'>
        <p className='footer-contact-heading'>
        You have any questions? 
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
            <button buttonStyle='btn--outline' type='submit'>Submit</button>
        </form>
        </div>
    </section>
    </div>
);
}

export default Footer;