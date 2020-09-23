import React from "react";
import { oneTrip } from "../data";

function TripPage() {
    return (
    <div>
        <h2>{oneTrip.title}</h2>
        <h3>Created at: {oneTrip.date_created}</h3>
        <h3>Status: {oneTrip.is_open}</h3>
        <h3>Pledges:</h3>
        <ul>
            {oneTrip.pledges.map((pledgeData, key) => {
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
