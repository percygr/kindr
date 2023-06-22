import React from 'react';
import Usericon from '../../imgs/icons/user.png'
import contact from '../../imgs/icons/contact.png'
import DOB from '../../imgs/icons/DOB.png'
import address from '../../imgs/icons/address.png'
import './Profile.css'


function ProfilePage() {
return(
    <div> 
    
    <div className = "container">
         
        <img className = "image-overlay" src={Usericon} alt="avatar" />
        <h1>Username</h1>

        <div className = "inputs-container"> 

            <div className = "profile-input-field">
                <img className = "icon-size" src={Usericon} alt="user-icon"></img>
                <input type="text" placeholder="First Name"/>
            </div>

            <div className = "profile-input-field">
                
                <input type="text" placeholder="Last Name"/>
            </div>

            <div className = "profile-input-field">
                <img className = "icon-size" src={DOB} alt="D.O.B"></img>
                <label for="date">D.O.B.</label>
                <input type="date" />
            </div>
            <div className = "profile-input-field">
                <img className = "icon-size" src={contact} alt="contact"></img>
                <input type="tel" placeholder="Contact number"/>
            </div>

            <div className = "profile-input-field">
                <img className = "icon-size" src={address} alt="address"></img>
                <input type="text" placeholder="Address"/>
            </div>
            <div className = "profile-input-field">
                
                <input type="text" placeholder="Post Code"/>
            </div>

        </div>

        <button className ='button-blue' >Edit Profile</button> 
        <button className ='button-green'>Save changes</button>

    </div>
    </div>
)}
export default ProfilePage;
