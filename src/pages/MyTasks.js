import TaskList from "../components/TaskList/taskList";

export default function MyTasksPage({
  tasks,
  setSelectedTask,
  categoryIcons,
  userInfo,
}) {
  return (
    <div className="br">
      <TaskList
        showCategories={false}
        tasks={tasks}
        setSelectedTask={setSelectedTask}
        categoryIcons={categoryIcons}
        userInfo={userInfo}
      />
    </div>
  );
}
