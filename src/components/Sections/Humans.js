import React from 'react';
import './Humans.css';

function Humans() {
    return (
    <div className='background-humans'>
        <div className="">
            <p>
                <h3>Humans</h3>
                <p className="nature-info">If Animals are a miracle to existence, our capacity to reason is the most marvelous thing of evolution. But this reasoning is a double edge sword and with the development of history, our talent to create together with our capacity to plan, has created cities, and factories, and changed how we live on Earth, being disattached to it. 
                Now, capitalism forces us to keep on producing, keep on buying, to the illusion of creatings we don't need. Moreover, this created need is destroying wildlife, environments and also people less fortunate that are forced to work to create these objects we don’t need. In order to save the planet, we need to create a new relationship with ourselves and to other humans, and when we respect everyone, we will take action forever.
                </p>
                <div className></div>
                <p className="button-line">If you wanna learn more <a href="https://left.eu/" target="_blank"><button className="myButton">click here</button></a>
                </p>
            </p>
        </div>
    </div>
);
}

{/*for you Carlos :) you have to import this into pages/Home.js later to see what you are doing on the npm DevServer*/}


export default Humans;