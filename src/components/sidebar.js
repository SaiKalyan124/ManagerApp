
import React, { Children } from "react";
import {Fa500Px} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import './../css/sidebar.css'

const Sidebar=({employeeName})=>{
    console.log(employeeName)

    const servicesMenu=[
        {
            path:"/Todos",
            name:"Todos",
            icons:<Fa500Px/>
        },
        {
            path:"/Concierge",
            name:"Concierge",
            icons:<Fa500Px/>
        },
        {
            path:"/Calender",
            name:"Calender",
            icons:<Fa500Px/>
        },
        {
            path:"/Jira",
            name:"Jira",
            icons:<Fa500Px/>
        },
        {
            path:"/Slack",
            name:"Slack",
            icons:<Fa500Px/>
        },
        {
            path:"/TeamSentiment",
            name:"TeamSentiment",
            icons:<Fa500Px/>
        },
        {
            path:"/Form",
            name:"Form",
            icons:<Fa500Px/>
        }
        
    ];
    const [isFormOpen, setIsFormOpen] = React.useState(false);
    const [activeSidebarItem, setActiveSidebarItem] = React.useState(null);
    const handleBarsClick = () => {
        setIsFormOpen((isFormOpen) => !isFormOpen);
    }
    
    return (
        <div className="container">
            <div className="Sidebar">
                <div className="top_section">
                    <h1 className="logo"> Pavan Badam - {employeeName}</h1>
                    <div className="bars" onClick={handleBarsClick}>
                        <Fa500Px/>

                    </div>
                </div>
                {
                    servicesMenu.map((item,index)=>(
                        <NavLink to={item.path} key={index} 
                            className="link" activeclassName="active" 
                            onClick={item.onCick}
                            >
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            
            
            </div>
        </div>
    );
};

export default Sidebar; 