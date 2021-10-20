import React from 'react';
import './Landing.css';
import Landingimage from '../../images/Landingpicture.png';

function Landing() {
  return (
    <>
      <div className='bgr-color'> {/* to declare the background*/}
        <div className='section-container'>
          <div className='row'>
            <div className='col'>
              <div className='landing-text-wrapper'>
                <div className='top-line'> You tiered of just talking about saving the earth? </div>
                <h1 className='heading'>Act now! Do your part in making our future green </h1>
                <p className= 'description'>        blablabla        </p>
                <a href='/linktoform' className='button' type='button'>Start now!</a>
                </div>
            </div>
            <div className='col'>
              <div className='img-wrapper'>
                <img src={Landingimage} alt='Two humans besides a big globe' className='landing-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;