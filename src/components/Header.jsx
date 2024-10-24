import './Header.css'
import { handleClick } from '../utilities/linkHandler.js'

import mail_icon from '../assets/mail_icon.svg'
import linkedin_icon from '../assets/linkedin_icon.svg'

export default function Contact() {
    return (
        <div className='contact-section'>
            <h1>Laura Smith</h1>
            <h4>Frontend Developer</h4>
            <p>laurasmith.website</p>
            
            <div className='button-container'>
                <button className='email-button' onClick={() => handleClick("https://www.gmail.com")}><img src={mail_icon} alt='Email icon'/>Email</button>
                <button className='linkedin-button' onClick={() => handleClick("https://www.linkedin.com")}><img src={linkedin_icon} alt='LinkedIn logo' />LinkedIn</button>
            </div>
        </div>
    )
}