import React, { useState, useEffect } from "react";
//import { allTrips } from "../data";
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
    <div> 
        <section className="destinations">
            <h3 className="title">Find travel mates:</h3>
            <p>Ready to join a new adventure with likeminded people? Join a trip or create your own.</p>
            <hr></hr>
        </section>
        <div id="trip-list">
            {tripList.map((tripData, key) => {
                return <TripCard key={key} tripData={tripData} />;
                })}
        </div>
    </div>
    );
   }
   

export default HomePage;
