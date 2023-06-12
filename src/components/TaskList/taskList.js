import TaskCard from "../TaskCard/taskCard";
//const filteredTasks = onlyAvailable ? tasks.filter(task => task.status_id === 1) : tasks;

export default function TaskList({ tasks, onlyAvailable }) {
  return (
    <div>
      <p>This is the task list of all the task cards</p>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
}
