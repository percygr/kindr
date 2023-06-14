import TaskCard from "../TaskCard/taskCard";

/*
Status IDs:
1: Available
2: Active
3: Completed
*/

export default function TaskList({
  tasks,
  onlyAvailable,
  selectedTask,
  setSelectedTask,
  categoryIcons,
}) {
  return (
    <div>
      {onlyAvailable && (
        <div className = "browse-container">
        <div className="tasklist-container">
          {showTasks(tasks, 1, selectedTask, setSelectedTask, categoryIcons)}
        </div>
        </div>
      )}
      {!onlyAvailable && (
        <div className="browse-container">

          <h2>Active Tasks</h2>
          <div className="tasklist-container">
            {showTasks(tasks, 2, selectedTask, setSelectedTask, categoryIcons)}
          </div>

          <h2>Completed Tasks</h2>
          <div className="tasklist-container">
            {showTasks(tasks, 3, selectedTask, setSelectedTask, categoryIcons)}
          </div>
        </div>
      )}
    </div>
  );
}

// show only tasks of one status id
function showTasks(
  tasks,
  statusId,
  selectedTask,
  setSelectedTask,
  categoryIcons
) {
  const filteredTasks = tasks.filter((task) => task.status_id === statusId);

  return filteredTasks.map((task) => (
    <div key={task.id}>
      <TaskCard
        task={task}
        tasks={tasks}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
        categoryIcons={categoryIcons}
      />
    </div>
  ));
}
