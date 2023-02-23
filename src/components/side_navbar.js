import React, { useEffect, useState } from "react";
import "./../css/side_Navbar.css";
import Main_todo from "../pages/Todos";
import 'react-calendar/dist/Calendar.css';
import EmployeeCalendar from "../pages/Calender";
import Dialog_Box from "../pages/dialog";


export default function SideNavbar({ selectedEmployee }) {
  const [showActionItems, setShowActionItems] = useState(false);
  const [showCalender, setShowCalender] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(false);

  const handleActionButtonClick = (linkName) => {
    if (linkName === "Action_items_button") {
        setShowActionItems(!showActionItems);
    } else {
        setShowActionItems(false);
    }
  };
  const handleCalenderButtonClick = (linkName) => {
    if (linkName === "Calendar_button") {
        setShowCalender(!showCalender);
    } else {
        setShowCalender(false);
    }
  };
  const handleFormButtonClick = (linkName) => {
    if (linkName === "Form_button") {
        setShowForm(!showForm);
        
    } else {
        setShowForm(false);
    }
  };
  useEffect(() => {
    if (selectedEmployee) {
      fetch('http://localhost:8000/OneOnOneInfo/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({name:selectedEmployee})
      })
      .then(response => {
        if (response.ok) {
          console.log('Fetched in Form',selectedEmployee);
          setFormData(true);
        } else {
          console.error('Error submitting form data');
        }
      })
      .catch(error => {
        console.error('Error submitting form data:', error);
      });
      console.log(JSON.stringify(selectedEmployee));
    }
  }, [selectedEmployee]);




  if (formData){
  return (
    <div>
      <div className="buttons">
        <div>
          <button id="Action_items_button" onClick={() => handleActionButtonClick("Action_items_button")}>
            Action Items
          </button>
        </div>
        <div>
          <button id="Calendar_button" onClick={() => handleCalenderButtonClick("Calendar_button")}>
            Calendar
          </button>
        </div>
        <div>
          <button id="Form_button" onClick={() => handleFormButtonClick("Form_button")}>
            Form
          </button>
        </div>
      </div>
      <div className="calendar-container">
        {showActionItems && <Main_todo />}
        {showCalender && <EmployeeCalendar />}
        {showForm && <Dialog_Box selectedEmployee={selectedEmployee}/>}
      </div>
    </div>
  );
}}