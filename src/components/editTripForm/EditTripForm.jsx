import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom"
import "./EditTripForm.css"
import { getStorage, isAuthenticated } from "../../utilities/localStorage";

function EditTripForm(props) {
    //variables 
    const {tripData} = props;

    const [trip, setTrip] = useState({
        title: "",
        itinerary: "",
        goal: null,
        image: "",
        is_open: true,
        date_created: "",
        cost: null,
        duration: null,
        start_date: "",
    });
    const history = useHistory();
    const{id}=useParams();

    useEffect(() => {
        if (tripData.title == null) return
        console.log({tripData})
        setTrip(
            {
                title: tripData.title,
                itinerary: tripData.itinerary,
                goal: tripData.goal,
                image: tripData.image,
                is_open: tripData.is_open,
                date_created: tripData.date_created.substr(0, 19) ,
                cost: tripData.cost,    
                duration: tripData.duration,
                start_date: tripData.start_date.substr(0, 19),
                organiser: tripData.organiser,
            }
        )
    }, [tripData])

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
        (`${process.env.REACT_APP_API_URL}trips/${id}`, 
        {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${getStorage("token")}`
            },
            body: JSON.stringify(trip),
        }
        );
        return response.json();
    }

    const handleSubmit = (e) => {
        console.log(trip)
        e.preventDefault();
        console.log(trip.is_open);
        console.log(trip.start_date);

        
        const createDate = new Date();
        trip.date_created = createDate.toJSON();
        console.log(trip.date_created);

         postData().then((response) => {
            if (isAuthenticated()){
                history.push(`/trip/${id}`);
            } 
            });
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
                        value={trip.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="textarea">
                    <label htmlFor="itinerary">Itinerary:</label>
                    <textarea 
                        type="text" 
                        id="itinerary" 
                        value={trip.itinerary}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="number">Goal number of trip mates:</label>
                    <input 
                        type="number" 
                        id="goal" 
                        value={trip.goal}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="image">Trip Image:</label>
                    <input 
                        type="text" 
                        id="image" 
                        value={trip.image}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="cost">Cost per person:</label>
                    <input 
                        type="number" 
                        id="cost" 
                        value={trip.cost}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="duration">Duration of the trip:</label>
                    <input 
                        type="number" 
                        id="duration" 
                        value={trip.duration}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="start_date">Start date for the trip:</label>

                    <input 
                        type="datetime-local" 
                        id="start_date" 
                        value={trip.start_date}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>Edit Trip</button>
            </form>
        </div>
    )
}

export default EditTripForm;
