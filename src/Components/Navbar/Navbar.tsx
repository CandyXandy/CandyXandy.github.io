import React from 'react';
import './Navbar.css'
import logo from "../../assets/logo.svg"
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuOpen from '../../assets/menu_open.svg'
import menuClose from '../../assets/menu_close.svg'

const Navbar = () => {

    const [menu, setMenu] = React.useState("home");
    const menuRef = React.useRef<HTMLUListElement | null>(null);

    const openMenu = () => {
        menuRef.current!.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current!.style.right = "-350px";
    }

    return (
        <div className='navbar'>
            <img id="logoPic" src={logo} alt="A small version of Alexander's headshot." />
            <img src={menuOpen} onClick={openMenu} alt='' className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img src={menuClose} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#resume'><p onClick={() => setMenu("resume")}>Resume</p></AnchorLink>{menu === "resume" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu === "portfolio" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Navbar
