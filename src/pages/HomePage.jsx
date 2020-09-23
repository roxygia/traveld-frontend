import React, { useState, useEffect } from "react";
import { allTrips } from "../data";
import TripCard from "../components/tripCard/tripCard"

function HomePage() {
    //variables 
    const [tripList, setTripList] = useState([]);

    //methods
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}trips`)
        .then((results)=>{
            return results.json();

        })
        .then((data) => {
            setTripList(data);
        });
       // setTripList(allTrips);
    }, []);


    //template
    return (
    <div id="trip-list">
        {tripList.map((tripData, key) => {
            return <TripCard key={key} tripData={tripData} />;
            })}
   </div>
    );
   }
   

export default HomePage;
