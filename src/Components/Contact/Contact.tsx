import { FormEvent } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    /**
     * onSubmit handles the event that fires when the user clicks the submit button on the contact form
     * @param event : the event that fired
     */
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // type event target as HTMLFormElement
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        // public key, it does not matter that this is exposed.
        formData.append("access_key", "9c2222b0-228b-4df4-a8d4-e6f7a666056a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {

            alert(res.message);

            //console.log("Success", res);
        }
    }
    return (
        <div id='contact' className='contact'>
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
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor=''>Your Name</label>
                    <input type="text" placeholder='Enter your name..' name='name' required />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your e-mail address..' name='email' required />
                    <label htmlFor=''>Write your message here</label>
                    <textarea name="message" rows={8} placeholder='Enter your message..' required />
                    <button type="submit" className="contact-submit">Submit Now!</button>
                </form>
            </div>
        </div>
    )
}

export default Contact