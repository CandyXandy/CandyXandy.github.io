
import "./Hero.css"
import profile_img from "../../assets/headshot.jpg"


const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="A headshot of Alexander" />
            <h1><span>Alexander Robertson. </span>Software Engineer. Adelaide, South Australia.</h1>
            <div className="hero-action">
                <div className="hero-connect"> Connect with me </div>
                <div className="hero-resume"> My resume </div>
            </div>
        </div>
    )
}

export default Hero