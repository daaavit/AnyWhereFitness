import React from 'react'
import './Contact.css'
import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'

const Contact = () => {
    return (
        <div className='main_contact'>
            <form className='form_wrapper'>
                <div id="combiner">
                    <div className='name_area'>
                        <label for='name_input'>NAME</label>
                        <input type='text' id='name_input' />
                    </div>
                    <div className='email_area'>
                        <label for='email_input'>EMAIL</label>
                        <input type='email' id='email_input' />
                    </div>
                </div>
                <div className='message_area'>
                    <label for='message_input'>MESSAGE</label>
                    <input type='textarea' id='message_input' />

                    <div className='button_area'>
                        <div>
                            <button id='send_btn'>SEND MESSAGE</button>
                        </div>
                        <div>
                            <button id='clear_btn'>CLEAR</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className='contact_wrapper'>
                <div className='contact_email'>
                    <h3><span id='circle'><MdEmail /></span> EMAIL</h3>
                    <a href='mailto:information@untitled.tld'>information@untitled.tld</a>
                </div>
                <div className='contact_phone'>
                    <h3><FaPhone /> Phone</h3>
                    <a href='(000) 000-0000 x12387'>(000) 000-0000 x12387</a>
                </div>
                <div className='contact_addres'>
                    <h3><ImHome /> Address</h3>
                    <address>
                    1234 Somewhere Road #5432 <br/>
                    Nashville, TN 00000<br/>
                    United States of America
                    </address>
                </div>

            </div>


        </div>
    )
}


export default Contact;