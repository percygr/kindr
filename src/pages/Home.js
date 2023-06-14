import { Link } from "react-router-dom";
import illustrationHome from "../imgs/illustrations/joy.png";

export default function HomePage() {
  return (
    <div className="home">
      <h1>How would you like to spread some kindness today?</h1>
      <Link to="/categories">
        <button className="button">Post a Task</button>
      </Link>
      <Link to="/browse">
        <button className="button-green">Volunteer</button>
      </Link>
      <image className="illustrationHome" src={illustrationHome} alt="illustration" />
    </div>
  );
}
