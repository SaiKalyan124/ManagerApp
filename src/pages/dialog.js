import React, { useState,useEffect } from "react";
import OneOnOneForm from "./1-1Form";
import "./../css/Form.css";

import "./../css/side_Navbar.css";
import { Button } from "semantic-ui-react";

export default function Dialog_Box({selectedEmployee}) {
  const [showForm, setShowForm] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const[data,setData]=useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/get-data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);



  console.log("employefrom dialogbox",{selectedEmployee},{data})
  const handleAcceptClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  if (!isOpen) {
    return null; // return null if form is closed
  }
  
  return (
    <>
    
    <form className="Form"> 
    
    <div>
      
      {showForm ? (
        <OneOnOneForm onClose={handleClose} />
      ) : (
        <div className="Dialog__content">
          
          <div className="panel">
          <div className="Scroll">
          <h3>1-1's</h3>
          {data && data.length > 0 ? (
            
                data.map((data) => (
                    
                <div key={data.timestamp}>
                  {/* <p>Wins: {data.wins || ''}</p> */}
                  {/* <p>Concerns: {data.concerns || ''}</p>
                  <p>Sentiment: {data.sentiment || ''}</p>
                  <p>Constructive self-feedback: {data.constructive_selfFeedback || ''}</p>
                  <p>Constructive feedback for manager: {data.constructive_FeedbackForManager || ''}</p>
                  <p>Positive self-feedback: {data.positive_selfFeedback || ''}</p>
                  <p>Positive feedback for manager: {data.positive_FeedbackForManager || ''}</p>
                  <p>Actions items for team member: {data.actions_items_for_team_member && data.actions_items_for_team_member.length ? data.actions_items_for_team_member.map((action) => action.label).join(', ') : ''}</p>
                  <p>Actions items for manager: {data.actions_items_for_Manager && data.actions_items_for_Manager.length ? data.actions_items_for_Manager.map((action) => action.label).join(', ') : ''}</p> */}
                  
                  <button className="timeStampButton">
                    
                    <p>Timestamp: {data.timestamp ? data.timestamp.toString() : ''}</p>
                    
                    </button><br/><br/>
                </div>
              ))):(
              
              <p>No Previous One on One</p>
              
              )}
                  </div>     

          <div className="New">
          <h2>Create 1-1</h2>
          <div className="Spacing_btw">   
          <button className="button-33" type="submit" onClick={handleAcceptClick}>
            Accept
          </button>
          <button className="button-88-red" type="button" onClick={handleClose}>
            Exit
          </button></div>
          </div>
          </div> 
        </div>
      )}
    </div>
    </form>
    </>
  );
}