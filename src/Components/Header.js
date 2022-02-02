import React from 'react'
import './Header.css'
import Navbar from './Navbar'


const Header = () => {
    return (
        <div className='main-wrapper'>
            <Navbar />
            <br/>
            <br/>
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