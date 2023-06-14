import TaskInfo from "../components/TaskInfo/taskInfo";
import CategoryScroll from "../components/CategoryScroll/categoryScroll";
//import { useEffect } from "react";

export default function CreateTaskPage({
  category,
  setCategory,
  categoryIcons,
}) {
  return (
    <div>
      <CategoryScroll category={category} setCategory={setCategory} />
      <TaskInfo
        isEditable={true}
        category={category}
        categoryIcons={categoryIcons}
      />
    </div>
  );
}
