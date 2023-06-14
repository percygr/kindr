import TaskList from "../components/TaskList/taskList";

export default function MyTasksPage({ tasks, setSelectedTask, categoryIcons }) {
  return (
    <div className="br">
      <TaskList
        showCategories={false}
        tasks={tasks}
        setSelectedTask={setSelectedTask}
        categoryIcons={categoryIcons}
      />
    </div>
  );
}
