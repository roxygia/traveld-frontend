import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import "./TripForm.css"
//import PickDate from "../dateTime/DateTime"
import { getStorage, isAuthenticated } from "../../utilities/localStorage";

function TripForm() {
    //variables 
    const [trip, setTrip] = useState({
        title: "",
        itinerary: "",
        goal: null,
        image: "https://via.placeholder.com/300.jpg",
        is_open: true,
        date_created: "",
        cost: null,
        duration: null,
        start_date: "",

    });
    const history = useHistory();

    

    //method
    const handleChange = (e) => {
        const {id, value} = e.target;
        setTrip((prevTrip) => ({
            ...prevTrip,
            [id]: value,
        }))
    }
    const postData = async() => {
        const response = await fetch
        (`${process.env.REACT_APP_API_URL}trips/`, 
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${getStorage("token")}`
            },
            body: JSON.stringify(trip),
        }
        );
        return response.json();
    }

    const handleSubmit = (e) => {
        console.log(trip)
        e.preventDefault();

        trip.title = "hello2";
        trip.itinerary = "testing";
        trip.goal = 4;
        trip.image = "https://via.placeholder.com/300.jpg";
        trip.cost= 400;
        trip.duration = 4;
        trip.start_date = "2020-06-20T14:28:23.382748Z";
        
        const createDate = new Date();
        trip.date_created = createDate.toJSON();
        console.log(trip.date_created);

        if(trip.title && 
            trip.goal && 
            trip.itinerary && 
            trip.image && 
            trip.cost && 
            trip.duration && 
            trip.start_date) {
         postData().then((response) => {
            if (isAuthenticated()){
                history.push("/");
            } 
            });
        }
    }


    //template
    return (
        <div className="trip-form">
            <form>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        id="title" 
                        placeholder="Enter trip title" 
                        onChange={handleChange}
                    />
                </div>
                <div className="textarea">
                    <label htmlFor="itinerary">Itinerary:</label>
                    <textarea 
                        type="text" 
                        id="itinerary" placeholder="Enter trip Itinerary" 
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="itinerary">Goal number of trip mates:</label>
                    <input 
                        type="number" 
                        id="goal" placeholder="Enter required number of trip mates to go ahead" 
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="image">Trip Image:</label>
                    <input 
                        type="text" 
                        id="image" placeholder="Enter a URL to an Image to use as thumbnail" 
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="is_open">Is open for pledges:</label>
                    <input 
                        type="checkbox" 
                        id="is_open" 
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="cost">Cost per person:</label>
                    <input 
                        type="number" 
                        id="cost" placeholder="Enter trip cost per person" 
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="duration">Duration of the trip:</label>
                    <input 
                        type="number" 
                        id="duration" placeholder="Enter number of days for the trip" 
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="start_date">Start date for the trip:</label>
                    {/* <PickDate 
                    id="start_date"
                    onChange={handleChange}
                    />*/}
                    <input 
                        type="text" 
                        id="start_date" placeholder="Enter start date" 
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>Create a Trip!</button>
            </form>
        </div>
    )
}

export default TripForm;
