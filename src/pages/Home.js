import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <Link to="/SelectCategory">
        <button>Post a Task</button>
      </Link>
      <Link to="/browse">
        <button>Volunteer</button>
      </Link>
    </div>
  );
}
