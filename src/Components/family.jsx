import Itachi from "../photos/photo1.jpg";
import "../css/family.css";
import { Link } from "react-router-dom"


function Family(){



    return(
        <div className="container">
            <div className="top">
                <img src={Itachi} alt="" />
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
                <button className="in">Check in date</button>
                <button className="out">Check out date</button>
                <button className="spend">Duration</button>
                <button className="nyaka">Search</button>
            </div>

            <div><h1 style={{marginTop: '2%'}}>Room Booking</h1></div>

            <div className="types">
                <table>
                    <thead>
                        <tr style={{backgroundColor: 'darkgray'}}>
                            <td>Room Type</td>
                            <td>Sleeps</td>
                            <td>Price per Night</td>
                            <td>Services</td>
                            <td>Amount</td>
                            <td>Booking Slip</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Family room gives you<br></br> enough space and confortability<br></br> to make your family not wanna leave
                            </td>
                            <td>2</td>
                            <td>ZAR 3600</td>
                            <td>
                                <p>*Breakfast, Lunch, Dinner</p><br></br>
                                <p>*Massage</p><br></br>
                                <p>*Swimming Pool</p>
                            </td>
                            <td>
                                <button className="amount">Drop down</button>
                            </td>
                        </tr>
                        <tr >
                            <td>
                                
                            </td>
                            <td>1</td>
                            <td>ZAR 1800</td>
                            <td>
                                <br></br><br></br>
                                <p>*Breakfast, Lunch, Dinner</p><br></br>
                                <p>*Massage</p><br></br>
                                <p>*Swimming Pool</p>
                            </td>
                            <td>
                                <button className="amount">Drop down</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Family;


/*



                        <tr>
                        <td>Family room gives you<br></br> enough space and confortability<br></br> to make your family not wanna leave</td>
                        
                        <tr>
                            <td>2</td>
                            <td>ZAR 3600</td>
                            <td>
                                <p>*Breakfast, Lunch, Dinner</p><br></br>
                                <p>*Massage</p><br></br>
                                <p>*Swimming Pool</p>
                            </td>
                            <td>
                                <button className="amount">Drop down</button>
                            </td>
                        </tr>
                        </tr>


                        */