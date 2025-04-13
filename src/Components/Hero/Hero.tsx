
import "./Hero.css"
import profile_img from "../../assets/headshot.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll"
import resume from '../../assets/AlexanderRobertson_CV.pdf'


const Hero = () => {


    function resumeClickHandler() {
        window.open(resume, 'blank_')?.focus();
    }

    return (
        <div id="home" className='hero'>
            <img src={profile_img} alt="A headshot of Alexander" />
            <h1><span>Alexander Robertson. </span>Software Engineer. Adelaide, South Australia.</h1>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me </AnchorLink></div>
                <div id="resume" className="hero-resume" onClick={resumeClickHandler}>My resume</div>
            </div>
        </div>
    )
}

export default Hero