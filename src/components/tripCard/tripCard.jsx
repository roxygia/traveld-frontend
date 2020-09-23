import React from "react"
import { Link } from "react-router-dom"
import "./tripCard.css"

function TripCard(props) {
    //variables 
    const {tripData} = props;

    //template
    return (
        <div className="trip-card">
            <Link to={`/trip/${tripData.id}`}>
                <img alt="Trip" src={tripData.image}/>
                <h3>{tripData.title}</h3>
            </Link>
        </div>
    )
}

export default TripCard;
