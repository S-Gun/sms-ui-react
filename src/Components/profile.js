
import React, {useState} from "react";
import { Offcanvas } from 'bootstrap';
import { render } from '@testing-library/react';
// import { Box } from '@material-ui/core';
import { Button } from "bootstrap";
import './Profile.css';


function OffCanvasProfile({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="Profile">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>profile</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            profile is under development.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  function Profile() {
    return (
      <>
        {['end'].map((placement, idx) => (
          <OffCanvasProfile key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }
  
//   render(<Profile />);
// function ProfileVisit(e) {
//       e.preventDefault();
//       console.log('profile under development');
    
//     }

//   export default function Profile() {
//     return(
//         <div className="profile">
         
      
//                 return (
//                     <form onClick= {ProfileVisit}>
//                         <button type="profile">Profile</button>
//                     </form>
//                 );

//         </div>
//      )

// }