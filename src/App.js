import React from 'react';
import sphere from './assets/sphere.mp4';

import { Blog, Footer, Header, Possibility, Whatgpt3, Features } from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css'

const App = () =>{
    return(
        <div className="App">
            <div className="gradient__container">
                <div className='video__container'>
                    <video autoPlay loop muted className="video">
                        <source src={sphere} type="video/mp4" />
                    </video>
                </div>
                <Navbar />
                <Header />
            </div>

            <Brand />
            <Whatgpt3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div> 
    )
}

export default App