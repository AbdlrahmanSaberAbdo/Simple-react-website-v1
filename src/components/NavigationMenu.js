import React from 'react'
import { Link } from 'react-router-dom'
import './css/navbar.css'
function NavigationMenu(props) {
    return (
        <>
            <ul className={props.click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link 
                        to="/" 
                        className="nav-links" 
                        onClick={props.closeMobileMenu}
                    >
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link 
                        to="/services" 
                        className="nav-links" 
                        onClick={props.closeMobileMenu}
                    >
                        Services
                    </Link>
                </li>

                <li className="nav-item">
                    <Link 
                        to="/products" 
                        className="nav-links" 
                        onClick={props.closeMobileMenu}
                    >
                        Products
                    </Link>
                </li>

                <li className="nav-item">
                    <Link 
                        to="/sign-up" 
                        className="nav-links-mobile" 
                        onClick={props.closeMobileMenu}
                    >
                        Sign-up
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default NavigationMenu
