import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-container" id='contact'>
        <div className="bg4"></div>
        <h1>Contact</h1>
        <div className="contact">
            <form id='form' action="https://formsubmit.co/gtgrim22@gmail.com" method="POST">
                <div className='input'>
                    <input placeholder='Your Name' className='textbox' id='name' name='name' type="text" required/>
                    <input placeholder='Your Email or Phone #' className='textbox' id='email' name='email' type="email" required/>
                </div>
                <textarea name="message" rows="5" placeholder='Message'className='textarea' required></textarea>
                <button type='submit' className="send">Send</button>
                <div className="footer">
                  © 2022 Ian Cross, LLC. All rights reserved.
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
