import React, { useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import Usericon from '../../imgs/icons/user.png'
import contact from '../../imgs/icons/contact.png'
import DOB from '../../imgs/icons/DOB.png'
import address from '../../imgs/icons/address.png'
import './Profile.css'


const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);


function ProfilePage({ userInfo }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [postcode, setPostcode] = useState("");
  const [DOB, setDOB] = useState();
  const [address, setAddress] = useState("");


async function handleSubmit() {
    const { error } = await supabase
      .from("kindr_users")
      .update({
        firstname: firstname,
        surname: lastname,
        telephone: contactnumber,
        postcode: postcode,
        dob: DOB,
        address: address,
    
      })
      .match({ supabase_id: userInfo.supabase_id });
    if (error) {
      console.log("user id ", userInfo.supabase_id);
      console.log("firstname", firstname);
      console.log("lastname", lastname);
      console.log("contactnumber", contactnumber);
      console.log("postcode", postcode);
      console.log("write error", error.message);
    }}

return(
    <div> 
    
    <div className = "container">
         
        <img className = "image-overlay" src={Usericon} alt="avatar" />
        <h1>Username</h1>

        <div className = "inputs-container"> 

            <div className = "profile-input-field">
                <img className = "icon-size" src={Usericon} alt="user-icon"></img>
                <input 
                type="text" 
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                />
            </div>

            <div className = "profile-input-field">
                <input 
                type="text" 
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)} />
            </div>

            <div className = "profile-input-field">
                <img className = "icon-size" src={DOB} alt="D.O.B"></img>
                <label for="date">D.O.B.</label>
                <input 
                type="date"
                value={DOB}
            onChange={(e) => setDOB(e.target.value)}
                />
            </div>

            <div className = "profile-input-field">
                <img className = "icon-size" src={contact} alt="contact"></img>
                <input 
                type="tel" 
                placeholder="Contact number"
                value={contactnumber}
            onChange={(e) => setContactnumber(e.target.value)}
                />
            </div>

            <div className = "profile-input-field">
                <img className = "icon-size" src={address} alt="address"></img>
                <input 
                type="text" 
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
            </div>

            <div className = "profile-input-field">
                
                <input 
                type="text" 
                placeholder="Post Code"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                />
            </div>

        </div>

        <button className ='button-blue' >Edit Profile</button> 
        <button className ='button-green' onClick = { () => handleSubmit()}>Save changes</button>

    </div>
    </div>
)}
export default ProfilePage;
