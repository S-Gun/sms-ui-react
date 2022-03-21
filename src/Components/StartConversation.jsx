import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './StartConversation.css';
import { Button, Navbar, Tab, FormControl, Form, InputGroup, ButtonGroup, Container, Nav, NavDropdown } from "react-bootstrap";
import ReactCircleModal from 'react-circle-modal'
import Fab from '@material-ui/core/Fab';
import { formatMs, Icon } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

<link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

export default function StartConversation(){
return(
<div className="popup">
    
    <ReactCircleModal
         
      backgroundColor="black" //backgroundImage = ".png"
      toogleComponent={onClick => (
        // <Icon fontSize="large">+</Icon>
        <Grid xs={1} align="right">
        <Fab  color ="primary" onClick={onClick} aria-label="add" ><Icon className ="new" fontSize="large">+</Icon></Fab>
        </Grid>
        // <button className="btn btn-primary" onClick={onClick}>
        //   New
        // </button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div style={{ backgroundColor: 'white', padding: '1em' }}>
            <button className='closebtn' onClick={onClick}>
            X
          </button>
          <Form>
          New Message 
           
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>TO:</Form.Label>
                <InputGroup className="mb-3">
                <FormControl
                placeholder="xyz20@iitk.ac.in"
                aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">+</Button>
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" as = "textarea" placeholder="Type your message here" />
            </Form.Group>
           
              <Button variant="primary" type="save" >
                  Save as Draft
              </Button>{'  '}

              <Button variant="primary" type="attachment"  >
                  Attachment
              </Button>{'  '}
            
              <Button variant="primary" type="send"  >
                 Send
              </Button>
            </Form>
            
        </div>
      )}
    </ReactCircleModal>
</div>
)
};
{/* <form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form> */}





