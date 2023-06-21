import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export default function UpdateProfilePage({ userInfo }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [postcode, setPostcode] = useState("");

  async function handleSubmit() {
    const { error } = await supabase
      .from("kindr_users")
      .update({
        firstname: firstname,
        surname: lastname,
        telephone: contactnumber,
        postcode: postcode,
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
    // navigate(`/`);
    // redirect to home page
    //redirect("/");
  }

  return (
    <div className="updateprofile-container">
      <div className="updateprofile">
        <h1>Hi {userInfo.supabase_id}! Please enter your details</h1>
        <form>
          <h5>First Name</h5>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <h5>Last Name</h5>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <h5>Contact Number</h5>
          <input
            type="text"
            value={contactnumber}
            onChange={(e) => setContactnumber(e.target.value)}
          />
          <h5>Postcode</h5>
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
          <button
            type="submit"
            className="button"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
