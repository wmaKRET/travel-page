import React from "react"
import Card from "./Card"
import cardsData from "../cardsData"

function Destinations(){
    const destinations = cardsData.data.destinations

    const destinationElements = destinations.map(destination => (
        <Card  
            key={destination.id}
            name={destination.name}
            url={destination.url}
            description={destination.description}
        />
    ))

    return (
        <div className="destinations" id="destinations">
            {destinationElements}
        </div>
    )
}

export default Destinations