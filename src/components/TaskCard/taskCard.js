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
        <h2 className='task-title-container'>{task.title}</h2>
        <p><strong>Duration: </strong>{task.duration}</p>
        <p><strong>Location: </strong>{task.location}</p>
        <p><strong>Creator ID: </strong>{task.creator_id}</p>
      </div>
    </div>
  );
}
