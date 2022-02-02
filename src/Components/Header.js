import React from 'react'
import './Header.css'
import { GiHamburgerMenu } from 'react-icons/gi'


const Header = () => {
    return (
        <div className='main-wrapper'>
            <div className='h3_style' >
                <h3><span className='FORTY_STYLE'>FORTY</span>  <span className='HTML_TEXT'>BY HTML5 UP</span></h3>
                <h3>MENU <GiHamburgerMenu /> </h3>
            </div>
            <div className='middletext_wrapper'>
                <div>
                    <h1 className='title'>Anywhere Fitness</h1>
                </div>
                <div className='underline'>

                </div>
                <div>
                    <p>THESE DAYS, FITNESS CLASSES CAN BE HELD ANYWHERE- A PARK, AN UNFINISHED BASEMENT OR A GARAGE- NOT JUST AT A TRADITIONAL GYM.
                CERTIFIED FITNESS INSTRUCTORS NEED AN EASY WAY TO TAKE THE AWKWARDNESS OUT OF ATTENDANCE TAKING AND CLIENT PAYMENT PROCESSING.</p>
                </div>
            </div>
        </div>
    )
}

export default Header;