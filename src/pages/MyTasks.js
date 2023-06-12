import TaskList from "../components/TaskList/taskList";

export default function MyTasksPage({ tasks }) {
  return (
    <div>
      <p>This is the My Tasks page</p>
      <TaskList showCategories={false} tasks={tasks} />
    </div>
  );
}
