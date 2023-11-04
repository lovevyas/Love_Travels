import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
function HeroSection() {
    return (
        <div className="hero-container">
            <video src={require('../components/Adventure_1.mp4')} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btn">
                <Button className="btns" 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    Start The ADVENTURE
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
