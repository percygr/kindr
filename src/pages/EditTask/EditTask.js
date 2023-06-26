import TaskInfo from "../../components/TaskInfo/taskInfo"

export default function EditTaskPage({
  categoryIcons,
  selectedTask,
  tasks,
  getTasks,
  setSuccessPath,
  userInfo,
  allUsers,
}) {
  return (
    <div className="create-task">
      <TaskInfo
        isEditable={true}
        categoryIcons={categoryIcons}
        selectedTask={selectedTask}
        tasks={tasks}
        getTasks={getTasks}
        setSuccessPath={setSuccessPath}
        userInfo={userInfo}
        allUsers={allUsers}
      />
    </div>
  );
}