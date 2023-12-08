import React from 'react';
import './feature.css';

const Feature = ({ title, text, row }) =>{
    return(
        <div className={row ? 'gpt3__features-container__feature-row' : 'gpt3__features-container__feature'}>
            <div className="gpt3__features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className={row ? 'gpt3__features-container__feature-text-row' : 'gpt3__features-container__feature-text'}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature