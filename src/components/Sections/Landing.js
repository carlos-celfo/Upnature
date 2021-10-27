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
                <div className='top-line'> Are you tired of just talking about saving the earth? </div>
                <h1 className='heading'>Act now!</h1>
                <h1 className='heading'>Do your part in making our future green </h1>
                <p className= 'description'> Saving the environment is not choice anymore, it is a survival truth. 
                But while world leaders debate the best ways for nations to tackle climate change, we as the citizens can feel powerless and unsure how to play our own part.
                But you don't have to: Let's come together and join hands in making the world a good place for generations to come. Find project dear and near to you or initate your own projects and find allies.    </p>
                <a href='/linktoform' className='button-lp' type='button'>Start now!</a>
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