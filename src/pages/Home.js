import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <Link to="/categories">
        <button className="button">Post a Task</button>
      </Link>
      <Link to="/browse">
        <button className="button-green">Volunteer</button>
      </Link>
    </div>
  );
}
