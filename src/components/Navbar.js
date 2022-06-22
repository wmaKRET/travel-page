import React from "react"

function Navbar() {
    const [hamburgerMenu, setHamburgerMenu] = React.useState(true)

    function toggleHamburgerMenu() {
        setHamburgerMenu(!hamburgerMenu)
    }

    function contactUs() {
        console.log('contact button')
    }

    return (
        <nav className="navbar">
            <a href="/" className="navbar__logo">Travel✈</a>
            <div className="navbar__menu">
                <a className="navbar-item" href="/">Home</a>
                <a className="navbar-item" href="/">Destinations</a>
                <a className="navbar-item" href="/">Services</a>
                <button
                    className="navbar-btn"
                    onClick={contactUs}
                >CONTACT US</button>
            </div>

            {/* menu for mobile devices */}
            <div className={hamburgerMenu
                ? "navbar__mobilemenu"
                : "navbar__mobilemenu navbar__mobilemenu-active"
            }>
                <a className="navbar-item mobile" href="/">Home</a>
                <a className="navbar-item mobile" href="/">Destinations</a>
                <a className="navbar-item mobile" href="/">Services</a>
                <button
                    className="navbar-btn mobile"
                    onClick={contactUs}
                >CONTACT US</button>
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