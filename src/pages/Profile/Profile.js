import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Usericon from "../../imgs/icons/user.png";
import contact from "../../imgs/icons/contact.png";
import dateOfBirth from "../../imgs/icons/DOB.png";
import location from "../../imgs/icons/address.png";
import "./Profile.css";
import { v4 as uuidv4 } from "uuid";

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
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [imageUUID, setImageUUID] = useState(null);

  useEffect(() => {
    if (userInfo) {
      setFirstname(userInfo.firstname);
      setLastname(userInfo.surname);
      setContactnumber(userInfo.telephone);
      setPostcode(userInfo.postcode);
      setDOB(userInfo.dob);
      setAddress(userInfo.address);
      setProfileImage(userInfo.avatarUrl);
    }
  }, [userInfo]);

  async function handleSubmit() {
    let fileName = "";
    if (selectedFile) {
      fileName = imageUUID;
    }
    setLoading(true);
    const { error } = await supabase
      .from("kindr_users")
      .update({
        firstname: firstname,
        surname: lastname,
        telephone: contactnumber,
        postcode: postcode,
        dob: DOB,
        address: address,
        avatar_link: fileName,
      })
      .match({ supabase_id: userInfo.supabase_id });
    if (error) {
      console.log("user id ", userInfo.supabase_id);
      console.log("firstname", firstname);
      console.log("lastname", lastname);
      console.log("contactnumber", contactnumber);
      console.log("postcode", postcode);
      console.log("write error", error.message);
    }
    setLoading(false);
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.log("No file selected.");
      return;
    }
    setProfileImage(selectedFile);
    console.log(profileImage);
    // const fileName = selectedFile.name;
    //const fileName = uuidv4();
    const fileExtension = selectedFile.name.split(".").pop(); // Get the file extension
    const fileName = `${uuidv4()}.${fileExtension}`; // Add the file extension to the user ID
    setImageUUID(fileName);

    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(fileName, selectedFile, {
          cacheControl: "3600",
          upsert: true,
        });

      if (error) {
        console.error("Error uploading file:", error);
      } else {
        console.log("File uploaded successfully:", data);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <img className="image-overlay" src={profileImage} alt="avatar" />
        <div>
          <input type="file" onChange={handleFileChange}  />
          <button onClick={handleUpload} className="button">
            Upload
          </button>
        </div>
        <h1>
          {(userInfo && firstname) ||
            "Hello, you must be new here! Please enter your user details below:"}
        </h1>
        <div className="inputs-container">
          <div className="profile-input-field">
            <img className="icon-size" src={Usericon} alt="user-icon"></img>
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div className="profile-input-field">
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div className="profile-input-field">
            <img className="icon-size" src={dateOfBirth} alt="D.O.B"></img>
            <label for="date">D.O.B.</label>
            <input
              type="date"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>

          <div className="profile-input-field">
            <img className="icon-size" src={contact} alt="contact"></img>
            <input
              type="tel"
              placeholder="Contact number"
              value={contactnumber}
              onChange={(e) => setContactnumber(e.target.value)}
            />
          </div>

          <div className="profile-input-field">
            <img className="icon-size" src={location} alt="address"></img>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="profile-input-field">
            <input
              type="text"
              placeholder="Post Code"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
          </div>
        </div>
        {/* <button className="button-blue">Edit Profile</button> */}
        <button className="button-green" onClick={() => handleSubmit()}>
          Save changes
        </button>
        {loading && <div>Saving...</div>}{" "}
        {/* Display loading message while saving */}
      </div>
    </div>
  );
}
export default ProfilePage;
