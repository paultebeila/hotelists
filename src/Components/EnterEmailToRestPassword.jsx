import React from 'react'
import "../css/enterEmail.css"
import { Link } from "react-router-dom";




function EnterEmailToRestPassword() {
  return (
    <div className='container' style={{ height: '50vh', width: '50vw' }}> 
        <h2 style={{ background: 'transparent' }}>Enter Your Email</h2>
    <div className='input-container'>
        <input type='email' placeholder='Enter Email'/>
    </div>
        <button className='submit'>Submit</button><br></br>
        <Link to="/">Back to login</Link>

    </div>
  )
}

export default EnterEmailToRestPassword;