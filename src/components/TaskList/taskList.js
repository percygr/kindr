import TaskCard from "../TaskCard/taskCard";

export default function TaskList({ tasks }) {
  return (
    <div>
      <p>This is the task list of all the task cards</p>
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
}
