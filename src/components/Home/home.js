import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>Post a Task</p>
      <Link to="/browse">Volunteer</Link>
    </div>
  );
}
