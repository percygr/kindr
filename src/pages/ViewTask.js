import TaskInfo from "../components/TaskInfo/taskInfo";

export default function ViewTaskPage({
  categoryIcons,
  selectedTask,
  tasks,
  getTasks,
}) {
  return (
    <div>
      <TaskInfo
        isEditable={false}
        categoryIcons={categoryIcons}
        selectedTask={selectedTask}
        tasks={tasks}
        getTasks={getTasks}
      />
    </div>
  );
}
