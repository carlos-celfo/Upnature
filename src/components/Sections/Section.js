import React from 'react';
import './Section.css';

function eSection() {
  return (
    <div className='section-container'>
      <image src='/images/x' />
        
      <h1>We don't have a Planet B</h1>
      <p> So what are you waiting for?</p>
      <div className='startbutton'>
        <button
          className='button'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
          GET STARTED
        </button>
        </div>
    </div>
  );
}

export default eSection;