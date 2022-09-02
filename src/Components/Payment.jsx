import React from 'react'
import '../css/payment.css'
import master from '../images/master.svg'
import swiping from '../images/swiping.jpg'

const Payment = () => {
  return (
     
        <div className='payment-container'>

            <img src={swiping} alt='bg' style={{ height: '90vh', opacity: '0.2' }}/>

            <h5 className='card-no'> Card Number </h5>
            <h6 className='sixteen-dig' style={{ textDecoration: 'capitalise' }}> Enter the 16 digits card number on your card</h6>
        
            <img className='icon' src={master} alt='master'/>
            <input className='card-number' type='text' placeholder='1234 - 5678 - 9876 - 8674' pattern="[0-9]+" />

            <h5 className='cvv-text'>Cvv Number</h5>        
            <h6 className='cvv-text-exp'> Enter 3 or 4 digit number on the card </h6>
                <input className='cvv-input' placeholder='CVV'/>
            
            <h5 className='expire'>Expiry Date</h5>        
            <h6 className='expire-enter'> Enter the expiration date on the card </h6>
            <input className='exp1'  placeholder='Month'/>
            <input className='exp2'  placeholder='Year'/>

            <h5 className='pass'>Password</h5>        
            <h6 className='pass-enter'> Enter your dynamic password </h6>
            <input className='password' placeholder='Password'/>    

            <button className='pay-now'>Pay Now</button>
        </div>  
  
  )
}

export default Payment