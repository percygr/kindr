// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function TaskCard({ task, setSelectedTask }) {
  const navigate = useNavigate();
  function handleSelectTask(taskId) {
    return () => {
      console.log("Task clicked: ", taskId);
      setSelectedTask(taskId);
      // redirect to /view
      navigate(`/view`);
    };
  }

  return (
    <div className="task-card">
      <div onClick={handleSelectTask(task.id)}>
        <p>Id: {task.id}</p>
        <p>Title: {task.title}</p>
        <p>Duration: {task.duration}</p>
        <p>Category: {task.category_id}</p>
        <p>Location: {task.location}</p>
        <p>Creator ID: {task.creator_id}</p>
      </div>
    </div>
  );
}
