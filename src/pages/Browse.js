import TaskList from "../components/TaskList/taskList";
import CategoryScroll from "../components/CategoryScroll/categoryScroll";

export default function BrowsePage({ tasks, setSelectedTask, categoryIcons }) {
  return (
    <div className="browse-container">
      <CategoryScroll categoryIcons={categoryIcons} />
      <TaskList
        tasks={tasks}
        onlyAvailable={true}
        setSelectedTask={setSelectedTask}
      />
    </div>
  );
}
