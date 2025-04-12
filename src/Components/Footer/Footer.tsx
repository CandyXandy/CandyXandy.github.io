import './Footer.css'
import footer_logo from '../../assets/logo.svg'




const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <div className="footer-top">
                <div className="footer-left">
                    <img id='logoPic' src={footer_logo} alt="" />
                    <p>Alexander Robertson. Software Engineer. Adelaide, South Australia.</p>
                </div>
                <p className="footer-right"> @ 2025 Alexander Robertson. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer