import React from "react"
import ContactUsButton from "./ContacUsButton"

function Hero(){
    return (
        <div className="hero" id="home">
            <h1>Welcome to <span className="travel-logo">Travel✈</span></h1>
            <ContactUsButton className="hero-btn" where='hero'/>
        </div>
    )
}

export default Hero