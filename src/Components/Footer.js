import React from 'react'
import './Footer.css'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { ImLinkedin2 } from 'react-icons/im'


const Footer = () => {
    return (
        <div className='footer_wrapper'>
            <div className='footer_icones'>
                <div className='social'>
                    <AiFillTwitterCircle size="2em" />
                    <BsFacebook size='2em' />
                    <BsInstagram size='2em' />
                    <BsGithub size='2em' />
                    <ImLinkedin2 size='2em' />
                </div>
                <div className='footer_text'>
                    <p>@Untitled | Design: HTML5 UP</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;