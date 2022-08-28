import React from 'react'
import "../css/dashboard.css"
import admin from '../images/admin.jpg'
import logo from '../images/logo.png'




function Dashboard() {
  return (

    <div className='dashboard-container'>
       
        <h2>Admin Dashboard </h2>
   

        <div className='search-container'> 
            <input type="text" placeholder='Search'/>
            <img src={admin} alt = 'Admin' />
            <div className='user-profile'> Motsisi Charles </div>
        </div>

        <div className='det-container'>
        
            <div className='left-container'>
                <img src={logo} alt='Logo' />
                <button className='calender'> Calender </button>
                <button className='booking'> Booking </button>
                <button className='earning'> Earning </button>
                <button className='rooms-available'> Rooms Available </button>
                <button className='logout'>Logout</button>


            </div>

            <div className='center-container'>
                
                <div className='rooms fam' style={{ float: 'right' }}>
                
                    <h4 style={{marginTop: '0px', background: 'transparent' }}>Family Room</h4>

                    <div className='room-details-container' style={{ display:'flex' }}>
                        <div className='booked'>3</div>
                        <div className='checked'>10</div>
                        <div className='avail'>35</div>
                    </div>

                    <div className='room-stats-container' style={{ display:'flex', background: 'transparent' }}>
                    
                       <div className='booked'>Booked</div>
                       <div className='checked'>Checked</div>
                       <div className='avail'>Available</div>

                    </div>

                </div>

                <div className='rooms deluxe' style={{ float: 'right', }}>
                
                    <h4 style={{marginTop: '0px', background: 'transparent' }}>Deluxe Room</h4>


                    <div className='room-details-container' style={{ display:'flex' }}>
                    <div className='booked'>3</div>
                    <div className='checked'>10</div>
                    <div className='avail'>35</div>
                </div>

                <div className='room-stats-container' style={{ display:'flex', background: 'transparent' }}>
                
                   <div className='booked'>Booked</div>
                   <div className='checked'>Checked</div>
                   <div className='avail'>Available</div>

                </div>


                </div>

                <div className='rooms single' style={{ float: 'right'}}>
                    <h4 style={{marginTop: '0px', background: 'transparent' }}>Single Room</h4>

                    <div className='room-details-container' style={{ display:'flex' }}>
                    <div className='booked'>3</div>
                    <div className='checked'>10</div>
                    <div className='avail'>35</div>
                </div>

                <div className='room-stats-container' style={{ display:'flex', background: 'transparent' }}>
                
                   <div className='booked'>Booked</div>
                   <div className='checked'>Checked</div>
                   <div className='avail'>Available</div>

                </div>

                </div>

                <div className='rooms luxury' style={{ float: 'right' }} >

                    <h4 style={{marginTop: '0px', background: 'transparent' }}>Luxury Room</h4>

                    <div className='room-details-container' style={{ display:'flex' }}>
                    <div className='booked'>3</div>
                    <div className='checked'>10</div>
                    <div className='avail'>35</div>
                </div>

                <div className='room-stats-container' style={{ display:'flex', background: 'transparent' }}>
                
                   <div className='booked'>Booked</div>
                   <div className='checked'>Checked</div>
                   <div className='avail'>Available</div>

                </div>      


                </div>

            </div>

            <div className='right-container' style={{background: 'white' }}>
            
                <h3>Latest Booking List</h3>

                <div className='client-info-container' style={{ display: 'flex' }}> 
                    <div className='names' > Charles </div>
                    <div className='date'> 01/01/01 </div>
                    <div className='type'>Single</div>
                    <div className='guest-number'> 1 Guest </div>
                    <div className='payment'> Paid </div>
                </div>

            </div>

        </div>
    
    </div>
    
    )
}

export default Dashboard;