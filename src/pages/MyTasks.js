import TaskList from "../components/TaskList/taskList";

export default function MyTasksPage() {
  return (
    <div>
      <p>This is the My Tasks page</p>
      <TaskList showCategories={false} />
    </div>
  );
}
