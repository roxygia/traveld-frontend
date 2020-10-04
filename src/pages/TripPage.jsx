import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { isAuthenticated, setStorage } from "../utilities/localStorage";
import "./TripPage.css"

function TripPage() {
    const [tripData, setTripData] = useState({ pledges: [] });
    const { id } = useParams();

       
    const [isloggedin, setisloggedin] = useState(false);
    const location = useLocation();

    useEffect(() => {
                isAuthenticated() ? setisloggedin(true) : setisloggedin(false);
                }, [location]);

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
        setStorage("tripId", tripData.id)
        return localDate
    }


    return (
    <div className="card-trip">
        <img src={tripData.image} alt="Trip Pic"></img>
        <div className="card-trip-infos">
            <div>
            <p>Created on: {transformDate(tripData.date_created)}</p>
            <p>Organiser Id: {tripData.organiser}</p>
            <h2>{tripData.title}</h2>
            <p>Start Date: {transformDate(tripData.start_date)}</p>
            <p>Duration: {tripData.duration} day(s)</p>
            <p>Cost: {tripData.cost} $</p>
            <p>Min no of trip mates: {tripData.goal}</p>
            <p>{`Trip open:   ${tripData.is_open}`}</p>

            <h3>Itinerary  </h3>
            <p>{tripData.itinerary}</p>
            
            
            <hr className="accent-line"/>
            <h2>Pledges</h2>
            <ul>
                {tripData.pledges.map((pledgeData) => {
                    return ( 
                        <li>
                        <p>{pledgeData.amount} Trip Mate(s) from User {pledgeData.trip_mate} </p>
                        </li>
                    );
                })}
                
            </ul>
            {isloggedin ? (
                <Link id="link" to="/pledges" >Join this trip!</Link>
                ) 
                : 
                (<Link id="link" to="/login">Login to join this trip</Link>)}

         </div>
         </div>
    </div>
    );
}

export default TripPage;
