import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import "./PledgeForm.css"
import { getStorage, isAuthenticated } from "../../utilities/localStorage";

function PledgeForm() {
    //variables 
    const [pledge, setPledge] = useState({
        amount: null,
        comment: "",
        anonymous: false
    });
    const history = useHistory();

    

    //method
    const handleChange = (e) => {
        const {id, value} = e.target;
        setPledge((prevPledge) => ({
            ...prevPledge,
            [id]: value,
        }))
    }
    const postData = async() => {
        const response = await fetch
        (`${process.env.REACT_APP_API_URL}pledges/`, 
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${getStorage("token")}`
            },
            body: JSON.stringify(pledge),
        }
        );
        return response.json();
    }

    const handleSubmit = (e) => {
        console.log(pledge)
        e.preventDefault();
        pledge.trip_id = getStorage("tripId");


        if(pledge.amount && 
            pledge.comment) {
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
                    <label htmlFor="amount">Number of trip mates:</label>
                    <input 
                        type="number" 
                        id="amount" placeholder="Enter number of trip mates" 
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <input 
                        type="text" 
                        id="comment" placeholder="Enter a comment for the organiser" 
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>Submit a Trip Pledge!</button>
            </form>
        </div>
    )
}

export default PledgeForm;
