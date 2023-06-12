import TaskList from "../components/TaskList/taskList";
import CategoryScroll from "../components/CategoryScroll/categoryScroll";

export default function BrowsePage({ tasks }) {
  return (
    <div>
      <p>Browse Tasks Page</p>
      <CategoryScroll />
      <TaskList tasks={tasks} />
    </div>
  );
}
