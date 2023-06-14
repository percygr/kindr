import TaskInfo from "../components/TaskInfo/taskInfo";

export default function ViewTaskPage({ categoryIcons, selectedTask, tasks }) {
  return (
    <div>
      <TaskInfo
        isEditable={false}
        categoryIcons={categoryIcons}
        selectedTask={selectedTask}
        tasks={tasks}
      />
    </div>
  );
}
