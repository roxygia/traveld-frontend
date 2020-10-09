import DeleteTrip from "../components/deleteTrip/DeleteTrip"
import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";


export function DeleteTripPage() {
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

    return <DeleteTrip tripData={tripData} />;
}

export function TripOrganiser() {
  const [userData, setuserData] = useState();
  const { id } = useParams();

  useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
      .then((results) => {
      return results.json();
      })
      .then((data) => {
      setuserData(data);
      });
  }, [id]);

  return <DeleteTrip userData={userData} />;
}

export default DeleteTrip;
