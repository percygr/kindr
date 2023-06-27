import TaskInfo from "../components/TaskInfo/taskInfo";

export default function CreateTaskPage({
  category,
  categoryIcons,
  getTasks,
  setSuccessPath,
  userInfo,
}) {
  return (
    <div className="create-task">
      <TaskInfo
        isEditable={true}
        category={category}
        categoryIcons={categoryIcons}
        getTasks={getTasks}
        setSuccessPath={setSuccessPath}
        userInfo={userInfo}
        editMode={false}
      />
    </div>
  );
}
