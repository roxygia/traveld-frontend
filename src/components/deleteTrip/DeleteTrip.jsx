import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { getStorage } from "../../utilities/localStorage";

function DeleteTrip() {
  const history = useHistory();
  const { id } = useParams();


  const deleteData = async () => {
  
    await fetch(
      `${process.env.REACT_APP_API_URL}trips/${id}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${getStorage("token")}`
        },
      }
    );
    
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    deleteData().then((response) => {
      //   clearStorage();
         console.log(response);
      history.push(`/`);
    });
  };

  const handleNoSubmit = (e) => {
    e.preventDefault();
    history.push(`/trips/${id}`);
  };
  //template
  return (
    <div className="trip-form">
            <form>
                <div>
                  <h2>Are you sure you want to delete this trip?</h2>
                </div>
                <button type="submit" onClick={handleSubmit}>Yes</button>
                <button type="submit" onClick={handleNoSubmit}>No</button>
            </form>
        </div>
     
   
  );
}

export default DeleteTrip;
