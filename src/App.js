//import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import React from 'react';
import ForgotPass from './Components/forgotPass';
import { BrowserRouter, Routes, Route, Router, Switch } from 'react-router-dom';
import SignUp from "./Components/signup"
<<<<<<<<< Temporary merge branch 1
import Dashboard from './Components/Dashboard'
import Home from './Components/home'
=========
import Family from './Components/family';
>>>>>>>>> Temporary merge branch 2

function App() {
  return (
    <div className="App">
<<<<<<<<< Temporary merge branch 1

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
=========
      <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/forgotPass" component={ForgotPass}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/family" component={Family}></Route>
      </Switch>
    </Router>
>>>>>>>>> Temporary merge branch 2
    </div>
  );
}

export default App;
