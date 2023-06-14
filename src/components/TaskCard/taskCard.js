// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import transport from "../../imgs/icons/tire.png";
// import gardening from "../../imgs/icons/gardening.png";
// import shopping from "../../imgs/icons/shopping-bags.png";
// import housework from "../../imgs/icons/house.png";
// import delivery from "../../imgs/icons/delivery-truck.png";
// import other from "../../imgs/icons/question-mark.png";


export default function TaskCard({
  task,
  tasks,
  setSelectedTask,
  selectedTask,
  categoryIcons,
}) {
  console.log(selectedTask);

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
    <div onClick={handleSelectTask(task.id)} className="task-card">
      <div className="image">
        <img
          className="category-icon"
          src={categoryIcons[task.category_id - 1].image}
          alt="task-icon"
        />
      </div>

      <div className="card-info">
        {/* <p>Id: {task.id}</p> */}
        <h2>Title: {task.title}</h2>
        <p>Duration: {task.duration}</p>
        {/* <p>Category: {task.category_id}</p> */}
        <p>Location: {task.location}</p>
        <p>Creator ID: {task.creator_id}</p>
      </div>
    </div>
  );
}
