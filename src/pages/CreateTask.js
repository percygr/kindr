import { Link } from "react-router-dom";
import TaskInfo from "../components/TaskInfo/taskInfo";
import CategoryScroll from "../components/CategoryScroll/categoryScroll";

export default function CreateTaskPage() {
  return (
    <div>
      <p>This is the create a task page</p>
      <CategoryScroll />
      <TaskInfo isEditable={true} />
      <Link to='/success'>
        <button>Submit</button>
      </Link>
    </div>
  );
}
