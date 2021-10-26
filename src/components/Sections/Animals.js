import React from 'react';
import './Animals.css';

function Animals() {
    return (
    <div className='container'>
        <div className="exterior-animals">
            <p className="interior-animals">
            <h3>Animals</h3>
            <p className="info-animals">Evolution in the planet has created a real miracle, the miracle of life, and fortunate enough, in planet Earth life has been thriving and changing. However, with the pollution of the forest, woods, seas and different lands, animals have been put to a challenge that they might not be able to win: there are species of animals that are already extinct because of human impact. And yes, there are still countless species living on Earth, but they deserve to thrive, not to suffer. 
            </p>
            <div className></div>
            <p className="button-line">If you wanna learn more <a href="https://wwf.panda.org/" target="_blank"><button className="myButton">click here</button></a>
            </p>
            </p>
        </div>
    </div>
);
}

{/*for you Carlos :) you have to import this into pages/Home.js later to see what you are doing on the npm DevServer*/}


export default Animals;