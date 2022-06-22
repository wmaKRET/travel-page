import React from "react"

function ContactUsButton(props) {
    function contactUs() {
        console.log('contact button')
    }

    return (
        <button
            className={props.where === 'hero' ? "hero-btn" : "navbar-btn"}
            onClick={contactUs}
        >CONTACT US</button>
    )
}

export default ContactUsButton