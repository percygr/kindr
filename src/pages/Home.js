import { Link } from "react-router-dom";
import illustrationPost from "../imgs/illustrations/post.png";
import illustrationVolunteer from "../imgs/illustrations/joy.png";
export default function HomePage() {
  return (
    <div className="home">
      <h1>How would you like to spread some kindness today?</h1>
      <div className="home-buttons"><Link to="/categories">
        <button className="button-blue">Post a Task</button>
      </Link>
      <Link to="/browse">
        <button className="button-green">Volunteer</button>
      </Link>
      </div>
      <div className="illustrationsHome">
      <img className="illustrationPost" src={illustrationPost} alt="illustration" />
      <img className="illustrationVolunteer" src={illustrationVolunteer} alt="illustration" />
      </div>
    

    </div>
  );
}
