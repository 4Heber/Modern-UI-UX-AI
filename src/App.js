import React from 'react';
import sphere from './assets/sphere.mp4';

import { Blog, Footer, Header, Possibility, Whatgpt3, Features } from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css'

const App = () =>{
    return(
        <div className="App">
            <div style={{ display: "relative", width:"100%", height:"660px", background:"radial-gradient(circle at 3% 25%, rgba(0,0,0,0.8) 1%, transparent)" }}>
                <div style={{ position:"absolute", height:"660px", zIndex:"-1", top:"0", right:"0" }}>
                    <video autoPlay loop muted style={{ width:"100%", height:"100%" }}>
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