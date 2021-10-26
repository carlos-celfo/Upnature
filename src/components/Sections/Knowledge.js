import React from 'react';
import './Knowledge.css';

function Knowledge() {
    return (
    <div className="background">
        <div className="nature-exterior">
           <h3 className="nature-title">Nature
           </h3>
              <p className="nature-interior">
                 <p className="nature-info">Nature is such a miracle, an ecosystem that has been alive for millions of years and because of the development of the human race, its being changed drastically, for the worst. Even though personal actions - like using less plastic or eating less meat - can help, in order to save our planet we need accountability to those who pollute the most: the big companies. Is important to be aware of the delicate life connection that exists in the world, that every piece of plastic thrown, every carbon mine that makes the environment more toxic and every tree that is cut down, will create a negative effect in how nature operates. 
                 </p>
              </p>
          <p className="button-line">If you wanna learn more <a href="https://en.wikipedia.org/wiki/Nature" target="_blank"><button className="myButton">click here</button></a>
          </p>
        </div>
    </div>
);
}

{/*for you Carlos :) you have to import this into pages/Home.js later to see what you are doing on the npm DevServer*/}


export default Knowledge;
