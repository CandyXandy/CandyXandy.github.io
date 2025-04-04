import './Footer.css'
import footer_logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img id='logoPic' src={footer_logo} alt="" />
                    <p>Alexander Robertson. Software Engineer. Adelaide, South Australia.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>


            <hr />

            <div className="footer-bot">
                <p className="footer-bottom-left"> @ 2025 Alexander Robertson. All Rights Reserved.</p>
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer