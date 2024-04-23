import React from 'react'
import './contact.css'
import AboutSocials from '../about/AboutSocials'

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <h2>Contact</h2>
      <AboutSocials/>
      <span>or</span>
      <form id="contact-form" action="https://formspree.io/f/xleqozzk" method="POST">
            <div>
                <label class="form-label" for="name">Name:</label>
                <input class="form-input" type="text" id="name" name="name" required/>
            </div>
            <div>
                <label class="form-label" for="email">Email:</label>
                <input class="form-input" type="email" id="email" name="email" required/>
            </div>
            <div>
                <label class="form-label" for="phone">Phone Number:</label>
                <input class="form-input" type="tel" id="phone" name="phone"/>
            </div>
            <div>
                <label class="form-label" for="subject">Subject:</label>
                <input class="form-input" type="text" id="subject" name="subject" required/>
            </div>
            <div>
                <label class="form-label" for="message">Message:</label>
                <textarea class="form-input" id="message" name="message" required></textarea>
            </div>
            <button class="btn btn-primary" type="submit">Send Message</button>
        </form>
    </div>
  )
}

export default Contact