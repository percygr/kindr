import TaskCard from "../TaskCard/taskCard";

/*
Status IDs:
1: Available
2: Active
3: Completed
4. Archived
*/

export default function TaskList({
  tasks,
  onlyAvailable,
  setSelectedTask,
  categoryIcons,
}) {
  return (
    <div className="browse-page">
      {onlyAvailable && (
        <div className="browse-container">
          {showTasks(tasks, 1, setSelectedTask, categoryIcons)}
        </div>
      )}
      {!onlyAvailable && (
        <>
          {/* only show title if there are some tasks of that status */}
          {tasks.some((task) => task.status_id === 2) && (
            <div className="browse-title">Active Tasks</div>
          )}

          <div className="browse-container">
            {showTasks(tasks, 2, setSelectedTask, categoryIcons)}
          </div>

          {tasks.some((task) => task.status_id === 3) && (
            <div className="browse-title">Completed Tasks</div>
          )}
          <div className="browse-container">
            {showTasks(tasks, 3, setSelectedTask, categoryIcons)}
          </div>
        </>
      )}
    </div>
  );
}

// show only tasks of one status id
// but we also need to pass on these other 2 props to the TaskCard component
function showTasks(tasks, statusId, setSelectedTask, categoryIcons) {
  const filteredTasks = tasks.filter((task) => task.status_id === statusId);

  return filteredTasks.map((task) => (
    <FragmentWrapper key={task.id}>
      <TaskCard
        task={task}
        setSelectedTask={setSelectedTask}
        categoryIcons={categoryIcons}
      />
    </FragmentWrapper>
  ));
}

// this seems to be the only way to add a key to the TaskCard component
// without using a div or other element that would break the styling
function FragmentWrapper({ children }) {
  return children;
}
