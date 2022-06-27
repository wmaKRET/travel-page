import React from "react"

function Card(props) {
    console.log(props.url)
    return (
        <div className="card">
            <img 
                className="card__image" 
                src={props.url}
                alt={props.name}
            />
            <div className="card__info">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card