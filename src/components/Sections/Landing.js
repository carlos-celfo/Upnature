import React from 'react';
import './Landing.css';
import Landingimage from '../../images/Landingpicture.png';
import { Link } from 'react-router-dom';
        
const Landing = () => {
  return (
    <>
      <div className='landing-section'>
        <div className='landing-container'>
          <div className='row'>
            <div className='col'>
              <div className='text-wrapper'>
                <div className='top-line'>Are you tired of just talking about saving the earth?</div>
                <h1 className='heading'>
                Do your part in making our future green 
                </h1>
                <p className= 'home__hero-subtitle'>
                Saving the environment is not choice anymore, it is a survival truth. 
                But while world leaders debate the best ways for nations to tackle climate change, we as the citizens can feel powerless and unsure how to play our own part.
                But you don't have to: Let's come together and join hands in making the world a good place for generations to come. Find project dear and near to you or initate your own projects and find allies.
                </p>
                <Link to='/form'>
                  <button buttonSize='btn--wide' className='landing-button'>
                    Get started!
                  </button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='img-wrapper'>
                <img src={Landingimage} alt='People besides a globe' className='landing-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

