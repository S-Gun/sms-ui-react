import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Conversations from './Components/Conversations';
import Bin from './Components/Bin';
// import Home from './Components/Home';
import MessageHeader from "./Components/header";
import { Switch } from '@material-ui/core';
import Profile from './Components/profile';
import * as bs from 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    <MessageHeader/>
    {/* <Profile/> */}
    {/* <Bin /> */}
    <Conversations />
    
    
    <Router>
          <Routes>
              <Route path="/" exact component={Conversations}>
              </Route>
              <Route path="/bin" exact component={Bin}>
              </Route>
          </Routes>
    </Router>
    </>
  );
}

export default App;
