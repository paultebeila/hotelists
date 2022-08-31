import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configure/firebase";



const SignUp = () => {
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')

    let history = useNavigate();

    const register = () =>{
        createUserWithEmailAndPassword(auth, email, name, surname, number, password).then(()=>{
            history("/home");
        }).catch((error)=>{
            console.log(error);
            alert("Error!!!");
        })
    }


    return(
        <div>

            <h1>Sign Up</h1>

            <input type="text" placeholder="Please Enter your Name" onChange={(e)=>setName(e.target.value)} /><br></br>
            <input type="text" placeholder="Please Enter your Surname" onChange={(e)=>setSurname(e.target.value)} /><br></br>
            <input type="email" placeholder="Please Enter your Email" onChange={(e)=>setEmail(e.target.value)} /><br></br>
            <input type="number" placeholder="Please Enter your phone number" onChange={(e)=>setNumber(e.target.value)} /><br></br>
            <input type="password" placeholder="Pleaser Create a Password" onChange={(e)=>setPassword(e.target.value)} /><br></br>

            <button style={{width: "150px", height: "30px"}} onClick={register}>SIGN UP</button><br></br>

            <span>Already have an account? </span>
            <span>
                <Link to="/">Login</Link>
            </span>
        </div>
    )
}

export default SignUp;