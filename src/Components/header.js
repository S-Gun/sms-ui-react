import React, { useState} from 'react'
import { Button, Navbar, Tab, FormControl, Form, Container, Nav, Badge, NavDropdown } from "react-bootstrap";
import { SvgIcon } from '@material-ui/core';

const Conversation = 'conversations'
const new_msg = 'new_msg'

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

export default function Header() {
    const [activeKey, setActiveKey] = useState(Conversation)
    
    return (
        // <div className='d-flex flex-column'>
        <> 
        <Navbar bg="dark" variant="dark" expand="dark">
        <Container fluid>
            <Navbar.Brand href="#"> <HomeIcon /> Message</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                
                <Nav.Link href="/" eventkey={Conversation}>Conversation</Nav.Link>
                <Nav.Link href="/bin">BIN{' '}<Badge bg="secondary">10</Badge></Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
        </>
    )
}