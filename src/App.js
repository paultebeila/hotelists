//import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import React from 'react';
import ForgotPass from './Components/forgotPass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./Components/signup"
import Dashboard from './Components/Dashboard'
import Home from './Components/home'
import Family from './Components/family';
import Payment from './Components/Payment';
import { CartProvider } from "react-use-cart";
import Cart from './Components/cart';


function App() {
  return (
    <div className="App">


    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/family" element={<Family/>} />
        <Route path="/Payment" element={<Payment/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </CartProvider>

    </div>
  );
}

export default App;
