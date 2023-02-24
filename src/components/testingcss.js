// import React from 'react';
// import {
// CDBSidebar,
// CDBSidebarContent,
// CDBSidebarFooter,
// CDBSidebarHeader,
// CDBSidebarMenu,
// CDBSidebarMenuItem,
// } from 'cdbreact';
// import { NavLink } from 'react-router-dom';
// const Sidebar = () => {
// return (


// <div
// style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
// >
// <CDBSidebar textColor="#fff" backgroundColor="#333">
// <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
// <a
// href="/"
// className="text-decoration-none"
// style={{ color: 'inherit' }}
// >
// Sidebar
// </a>
// </CDBSidebarHeader>
// <CDBSidebarContent className="sidebar-content">
// <CDBSidebarMenu>
// <NavLink exact to="/" activeClassName="activeClicked">
// <CDBSidebarMenuItem icon="columns">Main_todo</CDBSidebarMenuItem>
// </NavLink>
// <NavLink exact to="/Calendar" activeClassName="activeClicked">
// <CDBSidebarMenuItem icon="table">Calendar</CDBSidebarMenuItem>
// </NavLink>
// <NavLink exact to="/Dialog_Box" activeClassName="activeClicked">
// <CDBSidebarMenuItem icon="user">Dialog_Box</CDBSidebarMenuItem>
// </NavLink>
// </CDBSidebarMenu>
// </CDBSidebarContent>
// <CDBSidebarFooter style={{ textAlign: 'center' }}>
// <div
// style={{
// padding: '20px 5px',
// }}
// >
// Sidebar Footer
// </div>
// </CDBSidebarFooter>
// </CDBSidebar>
// </div>
// );
// };
// export default Sidebar;


//   if (formData){
  
//   return (
    
//     <div>
//       <div className="buttons">
//         <div>
//           <button id="Action_items_button" onClick={() => handleActionButtonClick("Action_items_button")}>
//             Action Items
//           </button>
//         </div>
//         <div>
//           <button id="Calendar_button" onClick={() => handleCalenderButtonClick("Calendar_button")}>
//             Calendar
//           </button>
//         </div>
//         <div>
//           <button id="Form_button" onClick={() => handleFormButtonClick("Form_button")}>
//             Form
//           </button>
//         </div>
//       </div>
//       <div className="calendar-container">
//         {showActionItems && <Main_todo />}
//         {showCalender && <EmployeeCalendar />}
//         {showForm && <Dialog_Box selectedEmployee={selectedEmployee}/>}
//       </div>
//     </div>
//   );
// }}