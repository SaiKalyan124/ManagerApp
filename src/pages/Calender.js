import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./../css/side_Navbar.css";

export default function EmployeeCalendar(){

    const Calendar_display=() => (
        <div className='Calendar'>
          <Calendar/>
          
          
        </div>
        
    
      );
    


    return <Calendar_display />;
}