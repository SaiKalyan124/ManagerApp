import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./../css/side_Navbar.css";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText ,MDBIcon} from 'mdb-react-ui-kit';


export default function EmployeeCalendar(){

    const Calendar_display=() => (
        <div className='Calendar'>
          
          <MDBCard className="MainCard" >
            <div className='h3font'><h3>Calendar</h3></div>
            <MDBCardBody>
            <MDBCardTitle><Calendar/></MDBCardTitle>
            <MDBCard>
            <MDBCardText>
              Plans For Today
            </MDBCardText>
            


            <MDBCard className='SubCards'>
              <MDBCardBody>
              <MDBIcon far icon="grin-alt" />
                <MDBCardText>
                <MDBIcon fas icon="calendar-alt" />You have meeting with Kalyan
                </MDBCardText>
              </MDBCardBody>

            </MDBCard>
            <MDBCard className='SubCards'>
              <MDBCardBody>
                <MDBCardText>
                  Meeting at 2 with Pavan
                </MDBCardText>
              </MDBCardBody>

            </MDBCard>

            <MDBCard className='SubCards'>
              <MDBCardBody>
                <MDBCardText>
                  Team Meeting at 11 AM
                </MDBCardText>
              </MDBCardBody>

            </MDBCard>
            <MDBCard className='SubCards'>
              <MDBCardBody>
                <MDBCardText>
                  Team Meeting at 11 AM
                </MDBCardText>
              </MDBCardBody>

            </MDBCard>
            <MDBCard className='SubCards'>
              <MDBCardBody>
                <MDBCardText>
                  Team Meeting at 11 AM
                </MDBCardText>
              </MDBCardBody>

            </MDBCard>




            </MDBCard>
            
            <div className='flex-row'>
              <a href='#'>Card link</a>
              <a href='#' style={{ marginLeft: '1.25rem' }}>
                Another link
              </a>
            </div>
          </MDBCardBody>
        </MDBCard>
          
          
        </div>
        
    
      );
    


    return <Calendar_display />;
}

