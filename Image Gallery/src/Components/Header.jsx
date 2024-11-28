import React from 'react'
import Navber from './Navber';
import Contact from './Contact';
import Logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header className='header'>
            <div className="">
                <img src={Logo} alt="logo" />
            </div>
            <Navber/>
            <Contact/>
        </header>
    )
}

export default Header
