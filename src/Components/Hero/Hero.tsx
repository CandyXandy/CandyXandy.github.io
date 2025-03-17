import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/headshot.jpg"


const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="A headshot of Alexander" />
            <h1><span>Alexander Robertson. </span>Software Engineer. Adelaide, South Australia.</h1>
            <p>
                Driven and personable graduate from the University of Adelaide (6.35/7 GPA) transitioning from a career in
                sales and hospitality to technology, combining technical expertise with proven collaborative skills. Experienced
                in back-end micro-service development in Go at Deloitte as well as legacy system modernisation using Java at the
                Australian Bureau of Statistics, including DevOps integration and implementation with rigorous testing frameworks.
                A laser-focused team player who is passionate about delivering scalable, efficient solutions while thriving in
                dynamic and agile environments.
            </p>
            <div className="hero-action">
                <div className="hero-connect"> Connect with me </div>
                <div className="hero-resume"> My resume </div>
            </div>
        </div>
    )
}

export default Hero