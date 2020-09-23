import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

    return (
    <div>
        <h2>{tripData.title}</h2>
        <h3>Created at: {tripData.date_created}</h3>
        <h3>{`Status: ${tripData.is_open}`}</h3>
        <h3>Pledges:</h3>
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
    );
}

export default TripPage;
