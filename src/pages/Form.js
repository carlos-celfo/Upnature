import React from 'react';
import './Form.css';
import Landingpic from '../images/Landingpicture.png';




const Form = () => {
	return (
    <div className='formbody'>
      <div className='item'>
        <h3 className='formh3'><b>“First step to change the world is to be brave enough to create and share ideas”</b></h3>
      </div>
      <div className='testbox'>
        <form className='form'>

          <div className='banner'>
          <h1>Ready to change the world</h1>
          </div>

          <div className='item'>
            <p className='p'>Topic</p>
            <input className='input' type='text' name='name' maxlength='1000' />
          </div>

          <div className='item'>
            <p className='p'>Name</p>
            <div className='name-item'>
              <input className='input'type='text' name= 'name' placeholder='First-Name' size='30' />
              <input className='input'type='text' name='name' placeholder='Last-Name' />
            </div>
          </div>

          <div className='contact-item'>
            <div className='item'>
              <p className='p'>Email</p>
              <input className='input' type='text' name='name' placeholder='akan@upnature.com' />
            </div>

            <div className='item'>
              <p className='p'>Phone</p>
              <input className='input' type='text' name='name' placeholder='+49 171 5972828' />
            </div>
          </div>

          <div className='item'>
            <p>Idea Name</p>
            <input className='input' type='text' name='name' maxlength='30' />
            <textarea className='textarea' rows='5' placeholder='Tell us your idea.....' maxlength="100000" />

          </div>

          <div className='btn-block'>
            <button className='bttnform' type='submit' href='/'> {/* Dayo please connect with backend*/}
              Let's change the World!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;