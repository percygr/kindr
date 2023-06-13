import TaskList from "../components/TaskList/taskList";
import CategoryScroll from "../components/CategoryScroll/categoryScroll";

export default function BrowsePage({ tasks }) {
  return (
    <div className='browse-container'>
      <p>Browse Tasks Page</p>
      <CategoryScroll />
      <TaskList tasks={tasks} onlyAvailable={true} />
    </div>
  );
}
