import TaskList from "../components/TaskList/taskList";
import CategoryScroll from "../components/CategoryScroll/categoryScroll";

export default function BrowsePage({
  tasks,
  setSelectedTask,
  categoryIcons,
  categoryFilter,
  setCategoryFilter,
  allUsers,
}) {
  return (
    <div>
      <CategoryScroll
        categoryIcons={categoryIcons}
        setCategoryFilter={setCategoryFilter}
      />

      <TaskList
        tasks={tasks}
        onlyAvailable={true}
        setSelectedTask={setSelectedTask}
        categoryIcons={categoryIcons}
        categoryFilter={categoryFilter}
        allUsers={allUsers}
      />
    </div>
  );
}
