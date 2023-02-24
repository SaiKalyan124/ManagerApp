import { Link, Routes,Route, useMatch, useResolvedPath, NavLink } from "react-router-dom"
import React, { useState } from 'react';
import EmployeesInfo from "./EmployeesInfo";
import "./../css/navbar_style.css"
import Platform_Services from "../pages/Platform_Services";



export default function Navbar({manager }){

  const [showEmployeeNavbar, setShowEmployeeNavbar]=useState(false);
  const [selectedEmployee,setselectedEmployee] = useState(null);

  const handleLinkClick  = (linkName)=>{
    if(linkName==='Platform_Services')
    {
      setShowEmployeeNavbar(!showEmployeeNavbar);

    }else{setShowEmployeeNavbar(false);
    }
  };
    return (
    <>
    <nav className="nav">        
        <ul>
        
                <NavLink  to="/devX" onClick={() => handleLinkClick('devX')}>devX</NavLink >
                <NavLink  to="/Delivery" onClick={() => handleLinkClick('Delivery')}>Delivery</NavLink >
                <NavLink  to="/Platform_Services" onClick={() => handleLinkClick('Platform_Services')}>Operations</NavLink >
        </ul>
    </nav>
    
          {
          showEmployeeNavbar && (
            <nav className={`nav2 ${showEmployeeNavbar ? 'show-nav2' : ''}`}>
            <EmployeesInfo manager={manager} setSelectedEmployee={setselectedEmployee}/>
          </nav>
              
            )
            }
            <Platform_Services selectedEmployee={selectedEmployee}/>
    </>
    )
}



