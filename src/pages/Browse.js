import TaskList from "../components/TaskList/taskList";
import CategoryScroll from "../components/CategoryScroll/categoryScroll";
import { GoTrueClient } from "@supabase/supabase-js";

export default function BrowsePage({ tasks }) {
  return (
    <div>
      <p>Browse Tasks Page</p>
      <CategoryScroll />
    <TaskList tasks={tasks} onlyAvailable = {true} />
    </div>
  );
}

