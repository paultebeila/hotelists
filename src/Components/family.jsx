// import Itachi from "../photos/photo.jpg";
/*import bg from '../slideIMG/5.jpg';*/
import "../css/family.css";
import { Link } from "react-router-dom"
import { useState } from "react";
import Data from "../data.json"
import Itemcard from "./itemcard";
import data from "./dataf";
import Cart from "./cart";
import Payment from "../Components/Payment"


function Family(props){
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");


    const handleCheckIn = (e) =>{
        setCheckIn(e.target.value);
        
    }
    const handleCheckOut = (e) =>{
        setCheckOut(e.target.value);
        
    }

    const handleSubmit = () => {
        <div>
        {data.productData.map((item, index)=>{
            return(
                <Payment
                title={item.title}
                desc={item.desc} 
                price={item.price}
                checkIn={checkIn}
                checkOut={checkOut} 
                item={item}
                key={index} 
                />
            )
        })}
    </div>
    }

    return(
        <div className="container">
            <div className="top">
                <img src="" alt="" />
            </div>
            
            <div className="links">
            <span style={{marginLeft: '70%'}}>
                    <Link to="/home"> Home </Link>
                </span>
                <span>
                    <Link to="/home"> Booking </Link>
                </span>
                <span>
                    <Link to="/home"> Check Out </Link>
                </span>
                <span>
                    <Link to="/home"> Contact </Link>
                </span>
            </div>
            <div className="sale">
                <p>Get 20% discount when you book 3 family rooms</p>
            </div>

            <div className="search">
                <input type="date" placeholder="Check in date" className="in"
                onChange={handleCheckIn} value={checkIn}/>
                <input type="date" placeholder="Check out date" className="out"
                onChange={handleCheckOut} value={checkOut}/>
                <button type="button" placeholder="Search" className="nyaka" onClick={handleSubmit}> Search </button>
            </div>

            <div><h1 style={{marginTop: '2%'}}>Room Booking</h1></div>

            <div className="types">
                <table>
                    <thead>
                        <tr style={{backgroundColor: 'darkgray'}}>
                            <td>Room Info</td>
                            <td>Qty</td>
                            <td>Services</td>
                            <td>Initial Amount</td>
                            <td>Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                        
                        <tr>
                            <td>
                                Family room gives you<br></br> enough space and confortability<br></br> to make your family not wanna leave
                            </td>
                            <td>1</td>
                            <td>
                                <p>Breakfast, Lunch, Dinner,<br></br>
                                   Massage,Swimming Pool,Wifi<br></br>
                                </p>
                            </td>
                            <td>ZAR 1800</td>
                            <td>

                                <br></br><br></br>
                            <section className="py-4 container">
                                <div className="row justify-content-center">
                                    {data.productData.map((item, index)=>{
                                        return(
                                            <Itemcard
                                            img={item.img}
                                            title={item.title}
                                            desc={item.desc} 
                                            price={item.price}
                                            checkIn={checkIn}
                                            checkOut={checkOut} 
                                            item={item}
                                            key={index} 
                                            />
                                        )
                                    })}
                                </div>
                                
                            </section>
                            </td>
                        </tr>
                        <tr >
                            <td>
                                
                            </td>
                            <td>2</td>
                            <td>
                                <p>Breakfast, Lunch, Dinner,<br></br>
                                   Massage,Swimming Pool,Wifi<br></br>
                                </p>
                            </td>
                            <td>ZAR 3600</td>
                            
                </tr>
                    </tbody>
                </table>
                
            </div>

            <span>
                <Link to="/cart">ADDED ROOM</Link>
            </span>
            
            <div>
                <Cart chechIn={checkIn} checkOut={checkOut}/>
            </div>
            {/*<div className="hide-payment" style={{display: "none"}}>
            {data.productData.map((item, index)=>{
                return(
                    <Payment
                    title={item.title}
                    desc={item.desc} 
                    price={item.price}
                    checkIn={checkIn}
                    checkOut={checkOut} 
                    item={item}
                    key={index} 
                    />
                )
            })}
        </div>*/}
            

        </div>
    )
}

export default Family;

