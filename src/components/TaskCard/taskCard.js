import { useNavigate } from "react-router-dom";

export default function TaskCard({ task, setSelectedTask, categoryIcons }) {
  const navigate = useNavigate();

  function handleSelectTask(taskId) {
    return () => {
      setSelectedTask(taskId);
      navigate(`/view`);
    };
  }

  return (
    <div onClick={handleSelectTask(task.id)} className="task-card">
      <div className="image">
        <img
          className="category-icon"
          src={categoryIcons[task.category_id - 1].image}
          alt="task-icon"
        />
      </div>

      <div className="card-info">
        <h2>{task.title}</h2>
        <p>Duration: {task.duration}</p>
        <p>Location: {task.location}</p>
        <p>Creator ID: {task.creator_id}</p>
      </div>
    </div>
  );
}
