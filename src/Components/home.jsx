
import "../css/home.css";
import { MdHome} from "react-icons/md"
import { MdEmail} from "react-icons/md"
import { BsTelephone} from "react-icons/bs"

function Home(){
    return(
        <div>

            <div className="cont">
                <img src="bopline.png" alt="Logo"/>
                    {/* <img src="../images/boopline.png"alt="Logo"/> */}
                <div className="links">
                   <a href="./home" className="home">Home</a>
                   <a href="" className="rms">Rooms</a>
                   <a href="#" className="about">About</a>
                   <a href="#" className="feat">Features</a>
                   <a href="#" className="contacts">Contacts</a>
                </div>
                <div className="msg">
                    <p>Get a discount of 20% when you <br></br>
                      book both standard and deluxe suites!!!</p>
                </div>
               
            </div>
            <form className="form">
                <div className="rooms">
                    <h2>Our Rooms</h2>
                    <div className="img">
                        <div className="luxury">
                            <img src="luxury.jpeg" alt=""/><br></br>
                            <h4>Luxury Room</h4>
                            <p>R4500 per night</p>
                        </div>
                        <div className="deluxe">
                            <img src="deluxe-room.jpeg" alt=""/><br></br>
                            <h4>Deluxe Room</h4>
                            <p>R2200 per night</p>
                        </div>
                        <div className="single">
                            <img src="single.jpg" alt=""/><br></br>
                            <h4>Single Room</h4>
                            <p>R800 per night</p>
                        </div>
                        <div className="family">
                            <img src="family room.jpg" alt=""/><br></br>
                            <h4>Family Room</h4>
                            <p>R1800 per night</p>
                        </div>
                        
                    </div>
                </div>
                <div className="about-cont">
                <h2>About Us</h2>
                    <div className="info">
                        <img src="gardenpic.jpg" alt=""/>
                        <p>Hotel location is in touch with nature<br></br>
                        which will give you the most relaxing experience!!!<br></br>
                        Book now and get the most amazing deals!!!</p>
                    </div>
                </div>
                <div className="features-cont">
                    <h2>Features</h2>
                    <div className="logos">
                        <div className="soccer">
                            <img src="soccer.png" alt=""/>
                            <h4>Soccer</h4>
                        </div>
                        {/*<div className="volley">
                            <img src="volley.png" alt=""/>
                            <h4>Volley Ball</h4>
                        </div>*/}
                        <div className="pool">
                            <img src="pool.jpg" alt=""/>
                            <h4>Swimming</h4>
                        </div>
                        <div className="gym">
                            <img src="gym.jpg" alt=""/>
                            <h4>Gym Facility</h4>
                        </div>
                        <div className="bar">
                            <img src="bar.png" alt=""/>
                            <h4>Bar</h4>
                        </div>
                        <div className="hike">
                            <img src="hikingLogo.png" alt=""/>
                            <h4>Hiking</h4>
                        </div>
                    </div>
                </div>
            </form>
            <footer className="footer">
                <div className="footer-cont">
                    <div className="activities">
                        <h3>Activities</h3>
                        <p>Soccer<br></br>
                        Swimming<br></br>
                        Gym<br></br>
                        Bar<br></br>
                        Hiking</p>
                    </div>
                    <div className="services">
                        <h3>Services</h3>
                        <p>Massage<br></br>
                        Breakfast<br></br>
                        Lunch<br></br>
                        Dinner</p>
                    </div>
                    <div className="cont-services">
                        <h3>Contact</h3>
                        <p><MdHome/>2603 Lebob Pretoria</p>
                        <p><MdEmail/>LebobHotel@hotmail.com</p>
                        <p><BsTelephone/>0123456033</p>
                    </div>
                </div>
            </footer>
            <div className="bottom-footer">
                <div className="footer-icons">
                    <img src="twitter.png" alt=""/>
                    <img src="pinterest.png" alt=""/>
                    <img src="insta.jpg" alt=""/>
                    <img src="fb.png" alt=""/>
                </div>
                <p className="copyright">{/*<CgCopyright/>*/}Copyright.All rights reserved</p>
            </div>

            

        </div>
    )
}

export default Home;