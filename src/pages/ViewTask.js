import TaskInfo from "../components/TaskInfo/taskInfo";


export default function ViewTaskPage({categoryIcons}) {
  return (
    <div>
      <p>This is the view a task page</p>
      <TaskInfo isEditable={false} categoryIcons={categoryIcons}/>
    </div>
  );
}
