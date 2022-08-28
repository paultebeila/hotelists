//import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import React from 'react';
import ForgotPass from './Components/forgotPass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./Components/signup"

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/forgotPass" component={<ForgotPass />} />
        <Route path="/signup" component={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
