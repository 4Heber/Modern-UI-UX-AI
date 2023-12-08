import React from 'react';
import './whatgpt3.css';
import Features from '../../components/features/Features';

const Whatgpt3 = () =>{
    return(
        <div className='gpt3__whatgpt3 section__margin' id="whpt3">
            <div className="gpt3__whatgpt3-features">
                <Features 
                    title="What is GPT-3"
                    text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
                />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Features 
                    title="Chatbots"
                    text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
                />
                <Features 
                    title="Knowledgebase"
                    text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
                />
                <Features 
                    title="Education"
                    text="ChatGPT aids education by offering personalized learning, answering queries, and providing instant academic support."
                />
            </div>
        </div>
    )
}

export default Whatgpt3