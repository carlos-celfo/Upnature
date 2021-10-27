import React from 'react';
import './Animals.css';
import suportar from '../../images/suportar.png';

function Animals() {
    return (
    <div className='background-animals'>
        <div className="exterior-animals">
            <h3 className="animals-title">Animals</h3>
                <p className="interior-animals">
                    <p className="info-animals">Evolution in the planet has created a real miracle, the miracle of life, and fortunate enough, in planet Earth life has been thriving and changing. However, with the pollution of the forest, woods, seas and different lands, animals have been put to a challenge that they might not be able to win: there are species of animals that are already extinct because of human impact. And yes, there are still countless species living on Earth, but they deserve to thrive, not to suffer. 
                    By studying and understanding more of the animal kingdom, you are able to make a difference for them. Is essencial to see how every animal is part of a web of maintance and it does affect the enviroment around us. In Upnature, we encourage you to take action first with them!
                    </p>
                    <div className="animal-icon">
                        <img src={suportar} alt ='a little bear icon' className="icons"/>      
                    </div>
                </p>
            <p className="button-line">If you wanna learn more <a href="https://wwf.panda.org/" target="_blank"><button className="myButton">click here</button></a>
            </p>
        </div>
    </div>
);
}

{/*for you Carlos :) you have to import this into pages/Home.js later to see what you are doing on the npm DevServer*/}


export default Animals;