import TaskInfo from "../components/TaskInfo/taskInfo";

export default function ViewTaskPage({
  categoryIcons,
  selectedTask,
  setSelectedTask,
  tasks,
  getTasks,
  setSuccessPath,
  userInfo,
  allUsers,
  setShowProfileID,
}) {
  return (
    <div className="view-task">
      <TaskInfo
        isEditable={false}
        categoryIcons={categoryIcons}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
        tasks={tasks}
        getTasks={getTasks}
        setSuccessPath={setSuccessPath}
        userInfo={userInfo}
        allUsers={allUsers}
        editMode={false}
        setShowProfileID={setShowProfileID}
      />
    </div>
  );
}
