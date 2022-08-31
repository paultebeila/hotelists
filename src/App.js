//import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import React from 'react';
import ForgotPass from './Components/forgotPass';
import { BrowserRouter, Routes, Route, Router, Switch } from 'react-router-dom';
import SignUp from "./Components/signup"

import Dashboard from './Components/Dashboard'
import Home from './Components/home'
import Booking from './Components/Booking';

import Family from './Components/family';


function App() {
  return (
    <div className="App">


    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/family" element={<Family/>}></Route>
      </Routes>
    </BrowserRouter>

      {/*<Router>
      <Routes>
        <Route exact path="/" element={Login}></Route>
        <Route path="/forgotPass" element={ForgotPass}></Route>
        <Route path="/signup" element={SignUp}></Route>
        <Route path="/family" element={Family}></Route>
      </Routes>
  </Router>*/}

    </div>
  );
}

export default App;
