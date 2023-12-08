import React from 'react';

import { Blog, Footer, Header, Possibility, Whatgpt3 } from './containers';
import { Brand, CTA, Navbar, Features } from './components';
import './App.css'

const App = () =>{
    return(
        <div className="App">
            <div className="gradient__bg">
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