import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import './Navbar.css'
import Hamburger from 'hamburger-react'


const Navbar = () => {
    const [navbar, setNavbar] = useState(false)


    const navbarChange = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }

    }

    window.addEventListener('scroll', navbarChange)

    return (
        <div className={navbar ? 'navbar active' : 'navbar'} >
            <h3><span className='navbar_text'>FORTY</span>  <span className='HTML_TEXT'>BY HTML5 UP</span></h3>
            <div className='hamburger'>
                <h3>MENU</h3>
                <Hamburger color='white' size={30}
                    onToggle={toggle => {
                        if (toggle) {
                            return (
                                <div>
                                    <ul>
                                        <li>HOME</li>
                                        <li>LANDING</li>
                                        <li>GENERIC</li>
                                        <li>ELEMENTS</li>
                                    </ul>
                                    <div>
                                        <button>GET STARETD</button>
                                    </div>
                                    <div>
                                        <button>LOG IN</button>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            console.log('closed')
                        }
                    }} />
            </div>
        </div>

    )
}

export default Navbar;  