
import './Navbar.css'
import logo from "../../assets/logo.svg"

const Navbar = () => {
    return (
        <div className='navbar'>
            <img id="logoPic" src={logo} alt="A small version of Alexander's headshot." />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}

export default Navbar
