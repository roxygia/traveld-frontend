import EditTripForm from "../components/editTripForm/EditTripForm"
import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";


function EditTripPage() {
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

    return <EditTripForm tripData={tripData} />;
}

export default EditTripPage;