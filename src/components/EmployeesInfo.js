import React, { useState, useEffect } from "react";
import SideNavbar from "./side_navbar";

export default function EmployeeInfo({ manager,setSelectedEmployee }) {
  const [employeeNames, setEmployeeNames] = useState([]);

  useEffect(() => {
    const names = manager?.teams?.flatMap((team) =>
      team.employees?.map((employee) => employee.display_name)
    ) || [];

    setEmployeeNames(names);
  }, [manager]);

  const handleEmployeeClick = (event, name) => {
    event.preventDefault();
    setSelectedEmployee(name);
  };

  return (
    <nav className="employee-nav">  
      <ul>
        {employeeNames.map((name, index) => (
          <li key={index}>
            <a href={name} onClick={(event) => handleEmployeeClick(event, name)}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}