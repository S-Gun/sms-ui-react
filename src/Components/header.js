import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown, Container, Form, FormControl, Button, Badge, Offcanvas } from 'react-bootstrap';
import { SvgIcon } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import FloatingPopup from './FloatingPopup.js'
import OffCanvasProfile from './profile';
import './MessageHeader.css'

function ProfileVisit() {
    // e.preventDefault();
    console.log('profile under development');
  
  }

function HomeIcon(props) {
    return (
            <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
    );
}

export default function MessageHeader () {
    return (
        <>
        <Navbar bg="dark" variant="dark" >
            <Container fluid>
                <Navbar.Brand href="#"><HomeIcon />Message</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
             <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '100px' }}navbarScroll>
                <Nav.Link href="https://www.youtube.com/" target="_blank">Home</Nav.Link>
                <Nav.Link href="https://www.nasa.gov/" target="_blank">Bin</Nav.Link>
                <Nav.Link href="https://www.nationalgeographic.com/" target="_blank">Draft</Nav.Link>
                <Nav.Link href="https://www.google.com/sky/" target="_blank">Sent{' '}<Badge bg="secondary">10</Badge></Nav.Link>
                    <NavDropdown title="Settings" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#newgroup">New Group</NavDropdown.Item>
                    <NavDropdown.Item href="#newlist">New Broadcast</NavDropdown.Item>
                    <NavDropdown.Item href="#outbox">Outbox</NavDropdown.Item>
                    <NavDropdown.Item href="#">Mute Messages</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action9"> Something else here
                    </NavDropdown.Item> </NavDropdown>
            </Nav>
         </Navbar.Collapse>
         <Navbar.Collapse className="justify-content-end">
             <Navbar.Text>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className='d-flex'>
                    <Avatar align='center' src="/broken-image.jpg"/>
                </Navbar.Toggle>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel" bg="dark">Signed in as: Shagun Jain</Offcanvas.Title>
                </Offcanvas.Header>
                <Button href='https://google.com' target="_blank">Profile</Button>
                <Offcanvas.Body>
                    Profile is under development.
                </Offcanvas.Body>
                </Navbar.Offcanvas>
             </Navbar.Text>
        </Navbar.Collapse>
        </Container>
     </Navbar>
        <Form className="d-flex" bg="dark" variant="dark">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
               <Button variant="outline-success">Search</Button>
            </Form>
        </>
    )
    
}


// import React, { useState} from 'react'
// import { Button, Navbar, Tab, FormControl, Form, Container, Nav, Badge, NavDropdown } from "react-bootstrap";
// import { SvgIcon } from '@material-ui/core';

// const Conversation = 'conversations'
// const new_msg = 'new_msg'

// function HomeIcon(props) {
//     return (
//       <SvgIcon {...props}>
//         <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//       </SvgIcon>
//     );
//   }

// export default function Header() {
//     const [activeKey, setActiveKey] = useState(Conversation)
    
//     return (
//         // <div className='d-flex flex-column'>
//         <> 
//         <Navbar bg="dark" variant="dark" expand="dark">
//         <Container fluid>
//             <Navbar.Brand href="#"> <HomeIcon />Message</Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Navbar.Collapse id="navbarScroll">
//             <Nav
//                 className="me-auto my-2 my-lg-0"
//                 style={{ maxHeight: '200px' }}
//                 navbarScroll>
                
//                 <Nav.Link href="/" eventkey={Conversation}>Conversation</Nav.Link>
//                 <Nav.Link href="/">Bin{' '}<Badge bg="secondary">10</Badge></Nav.Link>
//                 <Nav.Link href="/">Draft{' '}<Badge bg="secondary">0</Badge></Nav.Link>
//                 <Nav.Link href="/">Outbox{' '}<Badge bg="secondary">0</Badge></Nav.Link>
//             </Nav>
//             <Form className="d-flex">
//                 <FormControl
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//                 />
//                 <Button variant="outline-success">Search</Button>
//             </Form>
//             </Navbar.Collapse>
//         </Container>
//         </Navbar>
        
//         </>
//     )
// }