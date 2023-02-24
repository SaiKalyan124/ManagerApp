import React, { useEffect, useState } from "react";
import "./../css/side_Navbar.css";
import Main_todo from "../pages/Todos";
import 'react-calendar/dist/Calendar.css';
import EmployeeCalendar from "../pages/Calender";
import Dialog_Box from "../pages/dialog";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  
  } from 'cdbreact';
  import {MDBIcon} from 'mdb-react-ui-kit';
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




  return (
    <>
      <div style={{ display: 'flex', height: '100vh' }}>
        <div >
        <div className="sideNavbar">
            <CDBSidebar textColor="black" backgroundColor="white">
              <CDBSidebarHeader style={{height:'77px',backgroundColor:'black'}}prefix={<i className="fa fa-bars fa-large"></i>}>
                <a href="/" className="text-decoration-none" style={{ color: 'White', fontSize: '26px' }}>
                  Nirvana
                  
                </a>
                
              </CDBSidebarHeader>
                    <button style={{ textAlign: 'left' }}
                    className="sidebar-button"
                      id="Action_items_button"
                      onClick={() => handleActionButtonClick("Action_items_button")}
                    >
                      <h3><MDBIcon fas icon="clipboard-check" />Action Items</h3>
                    </button >
                    <button style={{ textAlign: 'left' }} className="sidebar-button" id="Calendar_button" onClick={() => handleCalenderButtonClick("Calendar_button")}>
                      
                      <h3><MDBIcon fas icon="calendar-alt" />Calendar</h3>
                    </button>
                    <button style={{ textAlign: 'left' }} className="sidebar-button" id="Form_button" onClick={() => handleFormButtonClick("Form_button")}>
                      
                      <h3><MDBIcon fas icon="edit" />Form</h3>
                    </button>
              <div className="Footer">
              <CDBSidebarFooter style={{ textAlign: 'left' }}>
                <div style={{ padding: '20px 5px' }}>
                  <h4>
                  <button style={{ textAlign: 'left' }} className="sidebar-button" id="Form_button" >
                      
                      <h3><MDBIcon fas icon="bell" />Reminders</h3>
                    </button>
                  </h4>
                  <h4>
                  <button style={{ textAlign: 'left' }} className="sidebar-button" id="Form_button" >
                      
                      <h3><MDBIcon fas icon="comments" />Messages</h3>
                    </button>
                  </h4>
                  
                <h3><MDBIcon far icon="grin-alt" />
                Pavan Badam
                </h3></div>
              </CDBSidebarFooter></div>
            </CDBSidebar>
          </div>
        </div>
        <div className="content-container" >
          {showActionItems && <Main_todo />}
          {showCalender && <EmployeeCalendar />}
          {showForm && <Dialog_Box selectedEmployee={selectedEmployee}/>}
        </div>
      </div>
    </>
  );
};
