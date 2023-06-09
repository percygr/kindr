import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button>Post a Task</button>
      <Link to="/browse">
        <button>Volunteer</button>
      </Link>
    </div>
  );
}
