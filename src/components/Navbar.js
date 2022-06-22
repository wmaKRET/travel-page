import React from "react"

function Navbar() {
    const [hamburgerMenu, setHamburgerMenu] = React.useState(true)

    function toggleHamburgerMenu() {
        setHamburgerMenu(!hamburgerMenu)
    }

    return (
        <nav className="navbar">
            <a href="/" className="navbar__logo">Travel✈</a>
            <div className="navbar__menu">
                <a className="navbar-item" href="/">Home</a>
                <a className="navbar-item" href="/">Destinations</a>
                <a className="navbar-item" href="/">Services</a>
                <button className="navbar-btn">CONTACT US</button>
            </div>

            {/* hamburger menu + hamburger button for mobile devices */}
            <div className="navbar__mobile">
                <div className="navbar__mobilemenu">

                </div>
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
            </div>
        </nav>
    )
}

export default Navbar