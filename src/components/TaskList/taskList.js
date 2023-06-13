import TaskCard from "../TaskCard/taskCard";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";

/*
Status IDs:
1: Available
2: Active
3: Completed
*/


export default function TaskList({ tasks, onlyAvailable }) {
  return (

    <div className="tasklist-container">
      <p>This is the task list of all the task cards</p>

      {onlyAvailable && <div>{showTasks(tasks, 1)}</div>}
      {!onlyAvailable && (
        <div>
          <div>Active Tasks</div>
          {showTasks(tasks, 2)}
          <div>Completed Tasks</div>
          {showTasks(tasks, 3)}
        </div>
      )}
    </div>
  );
}

// show only tasks of one status id
function showTasks(tasks, statusId) {
  const filteredTasks = tasks.filter((task) => task.status_id === statusId);

  return filteredTasks.map((task) => (
    <div key={task.id} className='card-container'>
      <TaskCard task={task} />
    </div>
  ));
}
