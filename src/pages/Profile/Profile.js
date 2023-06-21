import Usericon from '../../imgs/icons/user.png'
import contact from '../../imgs/icons/contact.png'
import DOB from '../../imgs/icons/DOB.png'
import address from '../../imgs/icons/address.png'
import './Profile.css'

function ProfilePage() {

return(
    <div  className = "container">
{/* header */}
<div className = "circle"> </div> 
<img className = "image-overlay" src={Usericon} alt="avatar" />

{/* input boxes */}

<div className = "inputs-container"> 
<h1>Username</h1>          

<div className = "profile-input-field">
    <img className = "icon-size" src={Usericon} alt="user-icon"></img>
    <h2>First Name</h2>
</div>

<div className = "profile-input-field">
    <img className = "icon-size" src={DOB} alt="D.O.B"></img>
    <h2>D.O.B</h2>
</div>

<div className = "profile-input-field">
    <img className = "icon-size" src={address} alt="address"></img>
    <h2>Address</h2>
</div>

<div className = "profile-input-field">
    <img className = "icon-size" src={contact} alt="contact"></img>
    <h2>Contact number</h2>
</div>

</div>

{/* buttons */}
<button className ='button-blue' >Edit Profile</button> 
<button className ='button-green'>Save changes</button>

</div>
)}
export default ProfilePage;