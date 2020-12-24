import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './css/navbar.css'
import NavigationMenu from './NavigationMenu'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect( () => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton)
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        ABDO <i className="fab fa-typo3"></i>
                    </Link>
                    <div className='menu-icon' onClick={() => setClick(!click)}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
                    </div>
                    <NavigationMenu closeMobileMenu={closeMobileMenu} click={click}/>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
