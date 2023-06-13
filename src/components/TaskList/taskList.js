import TaskCard from "../TaskCard/taskCard";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";

export default function TaskList({ tasks, onlyAvailable }) {
  const filteredTasks = onlyAvailable
    ? tasks.filter((task) => task.status_id === 1)
    : tasks;

  return (
    <div className="tasklist-container">
        {filteredTasks.map((task) => (
        <div className='card-container' key={task.id}>
          <TaskCard task={task} />
        </div>
      ))}
      </div>
  );
}
