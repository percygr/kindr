import { Link } from "react-router-dom";
import illustrationPost from "../imgs/illustrations/post.png";
import illustrationVolunteer from "../imgs/illustrations/joy.png";

//import Gif from "../imgs/gif/plant.gif";
//import Background from "../imgs/desktop/bg6.png";

export default function HomePage({ userInfo }) {
  return (
    <div className="home">
      <div className="home-text">
        <h1>Hi {userInfo.firstname}!</h1>
        <h1 className="title">
          How would you like to spread some kindness today?
        </h1>
        <h2>Post a task that you need help with or volunteer to help</h2>

        {/* <img src={Gif} alt="gif"className = "gif"/> */}
        <div className="home-buttons">
          <Link to="/categories">
            <button className="button-blue">Post a Task</button>
          </Link>
          <Link to="/browse">
            <button className="button-green">Volunteer</button>
          </Link>
        </div>
      </div>
      <div className="illustrationsHome">
        <img
          className="illustrationPost"
          src={illustrationPost}
          alt="illustration"
        />
        <img
          className="illustrationVolunteer"
          src={illustrationVolunteer}
          alt="illustration"
        />
      </div>
    </div>
  );
}
