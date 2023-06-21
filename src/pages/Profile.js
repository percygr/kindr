import Usericon from '../imgs/icons/user.png'

function ProfilePage() {

return(
    <>
<h1>Username</h1>
            

<img src="" alt="avatar" />

<div>
    <img src={Usericon} alt="user-icon"></img><h2>First Name</h2>
</div>
<div>
<img src={Usericon} alt="user-icon"></img><h2>D.O.B</h2>
</div>
<div>
    <img src={Usericon} alt="user-icon"></img><h2>Address</h2>
</div>
<div>
    <img src={Usericon} alt="user-icon"></img><h2>Contact number</h2>
</div>
<button>Edit Profile</button> <button>Save changes</button>
</>
)}
export default ProfilePage;