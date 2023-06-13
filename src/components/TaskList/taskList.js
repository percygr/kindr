import TaskCard from "../TaskCard/taskCard";

export default function TaskList({ tasks, onlyAvailable }) {
  const filteredTasks = onlyAvailable
    ? tasks.filter((task) => task.status_id === 1)
    : tasks;

  return (
    <div className="container">
      <p>This is the task list of all the task cards</p>
      {filteredTasks.map((task) => (
        <div key={task.id}>
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
}
