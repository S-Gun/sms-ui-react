
import React, {useState} from "react";
import { Offcanvas } from 'bootstrap';
import { Button } from "bootstrap";
import './Profile.css';


export default function OffCanvasProfile({ name, ...props }) {
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
            ThisUser profile is under development.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }