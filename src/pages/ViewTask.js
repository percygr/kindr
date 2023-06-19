import TaskInfo from "../components/TaskInfo/taskInfo";

export default function ViewTaskPage({
  categoryIcons,
  selectedTask,
  tasks,
  getTasks,
  setSuccessPath,
}) {
  return (
    <div className="view-task">
      <TaskInfo
        isEditable={false}
        categoryIcons={categoryIcons}
        selectedTask={selectedTask}
        tasks={tasks}
        getTasks={getTasks}
        setSuccessPath={setSuccessPath}
      />
    </div>
  );
}
