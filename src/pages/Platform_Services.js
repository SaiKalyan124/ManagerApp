import React, { useEffect, useState } from 'react';
import SideNavbar from '../components/side_navbar';

export default function Platform_Services({ selectedEmployee }) {
  const [formDataSubmitted, setFormDataSubmitted] = useState(false);
  

  useEffect(() => {
    if (selectedEmployee) {
      fetch('http://localhost:8000/employeeName/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({name:selectedEmployee})
      })
      .then(response => {
        if (response.ok) {
          console.log('Fetched Employee Name');
          setFormDataSubmitted(true);
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




  if (formDataSubmitted) {
    return (
      <>
        <div>
          <h2>{selectedEmployee}</h2>
        </div>
        <SideNavbar selectedEmployee={selectedEmployee}/>
      </>
    );
  } else {
    return null;
  }
}