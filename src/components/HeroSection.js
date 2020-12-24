import React from 'react'
import '../App.css'
import { Button } from './Button'
import './css/HeroSection.css'
function HeroSection(props) {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What Are you waiting for</p>
            <span className="page_title">{props.page_title}</span>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >GET STARTED</Button>

                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
