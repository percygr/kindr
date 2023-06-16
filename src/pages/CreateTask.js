import TaskInfo from "../components/TaskInfo/taskInfo";
import CategoryScroll from "../components/CategoryScroll/categoryScroll";
//import { useEffect } from "react";

export default function CreateTaskPage({
  category,
  setCategory,
  categoryIcons,
  getTasks,
}) {
  return (
    <div>
      <CategoryScroll
        category={category}
        setCategory={setCategory}
        categoryIcons={categoryIcons}
      />
      <TaskInfo
        isEditable={true}
        category={category}
        categoryIcons={categoryIcons}
        getTasks={getTasks}
      />
    </div>
  );
}
