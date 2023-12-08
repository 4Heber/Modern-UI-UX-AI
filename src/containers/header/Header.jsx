import React from 'react';
import './header.css';
import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
// import sphere from '../../assets/sphere.mp4';

const Header = () =>{
    return(
        <div className='gpt3__header section__padding' id="home">
            <div className="gpt3__header-content">
                {/* Main title */}
                <h1 className="gradient__text">
                    Let's Build Something amazing with GPT-3 OpenAI
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>

                {/* Email input */}
                <div className="gpt3__header-content__input">
                    <input type="email" name="email" id="email" placeholder='Your Email Address' />
                    <button type="button">Get Started</button>
                </div>

                {/* Users on platform */}
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>

            </div>
            {/* AI Image */}
            <div className="gpt3__header-image">
                
            </div>

            {/* Particle sphere video */}
            {/* <div>
                <video width={320} height={240} autoPlay loop muted>
                    <source src={sphere} type="video/mp4" />
                </video>
            </div> */}
        </div>
    )
}

export default Header