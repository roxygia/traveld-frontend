import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./TripPage.css"

function TripPage() {
    const [tripData, setTripData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}trips/${id}`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setTripData(data);
        });
    }, [id]);

    
    const transformDate = (date) => {
        var utcDate = new Date(date)
        var localDate = utcDate.toLocaleString();
        return localDate
    }


    return (
    <div className="card-trip">
        <img src={tripData.image} alt="Trip Pic"></img>
        <div className="card-trip-infos">
            <div>
            <h2>{tripData.title}</h2>
            <p>Created on: {transformDate(tripData.date_created)}</p>
            <p>Trip Start Date: {transformDate(tripData.start_date)}</p>
            <p>{`Trip Status Open -   ${tripData.is_open}`}</p>
            <h2>Pledges:</h2>
            <ul>
                {tripData.pledges.map((pledgeData) => {
                    return ( 
                        <li>
                        {pledgeData.amount} from {pledgeData.trip_mate}
                        </li>
                    );
                })}
            </ul>
         </div>
         </div>
    </div>
    );
}

export default TripPage;
