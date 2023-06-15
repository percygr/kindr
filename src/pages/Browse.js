import TaskList from "../components/TaskList/taskList";
import CategoryScroll from "../components/CategoryScroll/categoryScroll";

export default function BrowsePage({ tasks, setSelectedTask, categoryIcons, category, setCategory }) {
  return (
    <div>
      <CategoryScroll 
        categoryIcons={categoryIcons} 
        category={category}
        setCategory={setCategory}
      />
      
      <TaskList
        tasks={tasks}
        onlyAvailable={true}
        setSelectedTask={setSelectedTask}
        categoryIcons={categoryIcons}
      />
    </div>
  );
}
