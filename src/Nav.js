import React, { useState, useEffect } from 'react'
import './Nav.css';

function Nav() {
    const [show, handelShow] = useState(false);
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handelShow(true)
        }
        else {
            handelShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])


    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img className="nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
                <img className="nav__avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" />
            </div>
        </div>

    )
}

export default Nav
