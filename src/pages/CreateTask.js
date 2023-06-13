import { Link } from "react-router-dom";
import TaskInfo from "../components/TaskInfo/taskInfo";
import CategoryScroll from "../components/CategoryScroll/categoryScroll";
import { useEffect } from "react";

export default function CreateTaskPage({
  category,
  setCategory,
  categoryIcons,
}) {
  return (
    <div>
      <p>This is the create a task page</p>
      <CategoryScroll category={category} setCategory={setCategory} />
      <TaskInfo isEditable={true} categoryIcons={categoryIcons} />
      <Link to="/success">
        <button>Submit</button>
      </Link>
    </div>
  );
}
