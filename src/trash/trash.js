// Tree Component
// const TreeViewComponent = ({ manager }) => {
//   const popup_view = () => (
//     <div>
//       <Dialog />
//     </div>
//   );
//   return (
//     <TreeView 
//       defaultCollapseIcon={<ExpandMoreIcon/>}
//       defaultExpandIcon={<ChevronRightIcon/>}
//     >        
//       <TreeItem nodeId='1' label={<p> {manager.display_name}</p>}>
//         <TreeItem nodeId='2' label={manager.teams && manager.teams.map(team=>
//           <TreeItem nodeId='3' label={<p>{team.team_name}</p>}>            
//             <TreeItem nodeId='4' label={
//                   team.employees && team.employees.map(employee => (
//               <TreeItem nodeId={employee.id} key={employee.id} label={
//                   <Popup trigger={<button> {employee.display_name}</button>}
//                   modal
//                     closeOnDocumentClick>
//                       <div> {employee.display_name} {popup_view()}</div>
                      
//                   </Popup>
//                       }>
//               </TreeItem>
//                   ))
//                 } />  
//           </TreeItem>
//           )}>
//         </TreeItem>
//       </TreeItem>         
//     </TreeView>
//   );
// }



// import React, { Children } from "react";
// import {Fa500Px} from "react-icons/fa"
// import { NavLink } from "react-router-dom";
// import './../css/sidebar.css'

// const Sidebar=({employeeName})=>{
//     console.log(employeeName)

//     const servicesMenu=[
//         {
//             path:"/Todos",
//             name:"Todos",
//             icons:<Fa500Px/>
//         },
//         {
//             path:"/Concierge",
//             name:"Concierge",
//             icons:<Fa500Px/>
//         },
//         {
//             path:"/Calender",
//             name:"Calender",
//             icons:<Fa500Px/>
//         },
//         {
//             path:"/Jira",
//             name:"Jira",
//             icons:<Fa500Px/>
//         },
//         {
//             path:"/Slack",
//             name:"Slack",
//             icons:<Fa500Px/>
//         },
//         {
//             path:"/TeamSentiment",
//             name:"TeamSentiment",
//             icons:<Fa500Px/>
//         },
//         {
//             path:"/Form",
//             name:"Form",
//             icons:<Fa500Px/>
//         }
        
//     ];
//     const [isFormOpen, setIsFormOpen] = React.useState(false);
//     const [activeSidebarItem, setActiveSidebarItem] = React.useState(null);
//     const handleBarsClick = () => {
//         setIsFormOpen((isFormOpen) => !isFormOpen);
//     }
    
//     return (
//         <div className="container">
//             <div className="Sidebar">
//                 <div className="top_section">
//                     <h1 className="logo"> Pavan Badam - {employeeName}</h1>
//                     <div className="bars" onClick={handleBarsClick}>
//                         <Fa500Px/>

//                     </div>
//                 </div>
//                 {
//                     servicesMenu.map((item,index)=>(
//                         <NavLink to={item.path} key={index} 
//                             className="link" activeclassName="active" 
//                             onClick={item.onCick}
//                             >
//                             <div className="icon">{item.icon}</div>
//                             <div className="link_text">{item.name}</div>
//                         </NavLink>
//                     ))
//                 }
            
            
//             </div>
//         </div>
//     );
// };

// export default Sidebar; 


import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Slider } from "@material-ui/core";
import "./../css/slider.css";
import "./../css/sidebar.css";
import { Input, Page, setOptions } from '@mobiscroll/react-lite';


export default function OneOnOneForm(props) {


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      wins: state.wins,
      concerns: state.concerns,
      sentiment: sentimentValue.sentiment,
      constructive_selfFeedback: state.constructive_selfFeedback,
      constructive_FeedbackForManager: state.constructive_FeedbackForManager,
      positive_selfFeedback: state.positive_selfFeedback,
      positive_FeedbackForManager: state.positive_FeedbackForManager,
      actions_items_for_team_member: checkboxes1.filter(c => c).map(c => ({
        label: c.label,
        checked: c.checked
      })),
      actions_items_for_Manager: checkboxes2.filter(d => d).map(d => ({
        label: d.label,
        checked: d.checked
      })),
      
    };
    // console.log(formData);
    // save the form data in JSON format here
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    // store data locally
    fetch('http://localhost:8000/submit-form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          console.log('Form data submitted successfully');
        } else {
          console.error('Error submitting form data');
        }
      })
      .catch(error => {
        console.error('Error submitting form data:', error);
      });
  };
  
    return (
        <>
      <div>
        <br/>
        <form onSubmit={handleSubmit}>
            <button class="button-33" type="button" onClick={handleAddCheckbox2}>
              Add Items
            </button>            
          <br /><br/>
          <div className='form-button'>
          <button class="button-88" type="submit">Submit</button> 
          <button class="button-88-red" type="exit">Exit</button>
          </div>
        </form>
      </div>
      </>
    );
  }
  