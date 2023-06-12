import { Link } from "react-router-dom";

export default function TaskCard({ task }) {
  return (
    <div>
      <Link to="/view">
        <p>Title: {task.title}</p>
        <p>Duration: {task.duration}</p>
        <p>Category: {task.category_id}</p>
        <p>Location: {task.location}</p>
        <p>Creator ID: {task.creator_id}</p>
      </Link>
    </div>
  );
}
