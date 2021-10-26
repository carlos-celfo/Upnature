import React from 'react';
import './Contactsection.css';
import Contactimage from '../../images/Contactimage.png';
import { Link } from 'react-router-dom';

const Contactsection = () => {
    return (
        <div className='contact-container'>
            <div className='row'> 
                <div className='col'>
                    <div className='img-wrapper'> 
                        <img src={Contactimage} alt='Three humans who talk about sustainability' className='contact-img' />
                    </div>
                </div>
                <div className='col'>
                    <div className='contact-text-wrapper'> 
                        <p className='contact-heading'>
                        Do you have any questions? 
                        </p>
                        <p className='contact-text'>
                        Drop us a line!
                        </p>
                        <Link to='/contact'>
                        <button className='contact-button'> Send a Message</button>
                        </Link>
                        
                    </div>
                </div>   
            
            
            </div>
        </div>
    );
}

export default Contactsection;
