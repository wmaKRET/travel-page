import React from "react"
import ContactUsButton from "./ContacUsButton"

function Navbar() {
    const [hamburgerMenu, setHamburgerMenu] = React.useState(true)

    function toggleHamburgerMenu() {
        setHamburgerMenu(!hamburgerMenu)
    }

    return (
        <nav className="navbar">
            <a href="#home" className="navbar__logo travel-logo">Travel✈</a>
            <div className="navbar__menu">
                <a className="navbar-item" href="#home">Home</a>
                <a className="navbar-item" href="#destinations">Destinations</a>
                <a className="navbar-item" href="#services">Services</a>
                <ContactUsButton />
            </div>

            {/* menu for mobile devices */}
            <div className={hamburgerMenu
                ? "navbar__mobilemenu"
                : "navbar__mobilemenu navbar__mobilemenu-active"
            }>
                <a className="navbar-item mobile" href="/">Home</a>
                <a className="navbar-item mobile" href="/">Destinations</a>
                <a className="navbar-item mobile" href="/">Services</a>
                <ContactUsButton />
            </div>
            {/* hamburger button to control menu popup on mobile devices */}
            <div
                className="navbar__mobilehbg"
                onClick={toggleHamburgerMenu}
            >
                <span className={hamburgerMenu
                    ? "navbar__mobilehbg-line"
                    : "navbar__mobilehbg-line navbar__mobilehbg-line-X"}>
                </span>
                <span className={hamburgerMenu
                    ? "navbar__mobilehbg-line"
                    : "navbar__mobilehbg-line navbar__mobilehbg-line-X"}>
                </span>
                <span className={hamburgerMenu
                    ? "navbar__mobilehbg-line"
                    : "navbar__mobilehbg-line navbar__mobilehbg-line-X"}>
                </span>
            </div>
        </nav>
    )
}

export default Navbar