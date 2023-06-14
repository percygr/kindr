import TaskList from "../components/TaskList/taskList";

export default function MyTasksPage({ tasks, setSelectedTask }) {
  return (
    <div className = "br">
      <TaskList
        showCategories={false}
        tasks={tasks}
        setSelectedTask={setSelectedTask}
      />
    </div>
  );
}
