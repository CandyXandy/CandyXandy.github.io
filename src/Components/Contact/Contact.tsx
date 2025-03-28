
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h2>Let's talk</h2>
                    <p>
                        I'm always on the look out for new opportunities. If you have any projects, or other
                        opportunities, I'd love to hear from you.
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>A_Robertson36@hotmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+61412370364</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Adealide, South Australia</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor=''>Your Name</label>
                    <input type="text" placeholder='Enter your name..' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your e-mail address..' name='email' />
                    <label htmlFor=''>Write your message here</label>
                    <textarea name="message" rows={8} placeholder='Enter your message..' />
                    <button type="submit" className="contact-submit">Submit Now!</button>
                </form>
            </div>
        </div>
    )
}

export default Contact