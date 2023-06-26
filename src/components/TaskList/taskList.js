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
  categoryFilter,
  userInfo,
  allUsers,
}) {
  return (
    <div className="browse-page">
      {onlyAvailable && (
        <div className="browse-container">
          {showTasks(
            tasks,
            1,
            setSelectedTask,
            categoryIcons,
            categoryFilter,
            userInfo,
            allUsers,
            false
          )}
        </div>
      )}

      {!onlyAvailable && (
        <>
          {/* only show my posted tasks that have the creator_id of my ID */}
          {tasks.some(
            (task) => task.status_id === 1 || task.status_id === 2
          ) && <div className="browse-title">Posted Tasks:</div>}

          <div className="browse-container">
            {showTasks(
              tasks,
              2,
              setSelectedTask,
              categoryIcons,
              categoryFilter,
              userInfo,
              allUsers,
              true
            )}
          </div>

          {/* only show title if there are some tasks of that status */}
          {tasks.some((task) => task.status_id === 2) && (
            <div className="browse-title">Accepted Tasks:</div>
          )}

          <div className="browse-container">
            {showTasks(
              tasks,
              2,
              setSelectedTask,
              categoryIcons,
              categoryFilter,
              userInfo,
              allUsers,
              false
            )}
          </div>

          {tasks.some((task) => task.status_id === 3) && (
            <div className="browse-title">Completed Tasks:</div>
          )}
          <div className="browse-container">
            {showTasks(
              tasks,
              3,
              setSelectedTask,
              categoryIcons,
              categoryFilter,
              userInfo,
              allUsers,
              false
            )}
          </div>
        </>
      )}
    </div>
  );
}

// show only tasks of one status id
// but we also need to pass on these other 2 props to the TaskCard component
function showTasks(
  tasks,
  statusId,
  setSelectedTask,
  categoryIcons,
  categoryFilter,
  userInfo,
  allUsers,
  posted
) {
  let filteredTasks;

  if (statusId === 1 && categoryFilter !== 0) {
    // show tasks that have a category that matches the category filter
    filteredTasks = tasks.filter(
      (task) => task.status_id === 1 && task.category_id === categoryFilter
    );
  } else if (categoryFilter === 0) {
    // this shows all available tasks
    filteredTasks = tasks.filter((task) => task.status_id === 1);
  } else if (posted) {
    // show only tasks that I have posted and are available or active
    filteredTasks = tasks.filter(
      (task) =>
        task.creator_id === userInfo.id &&
        (task.status_id === 1 || task.status_id === 2)
    );
  } else {
    // this bit is just status 2 and 3 by default
    filteredTasks = tasks.filter(
      (task) => task.status_id === statusId && task.helper_id === userInfo.id
    );
  }
  if (filteredTasks.length === 0) {
    return (
      // this is the message that shows when there are no tasks of this type
      <div className="no-tasks-message">
        Oh, it seems there are currently no tasks of this type available!
      </div>
    );
  }

  //console.log("user info", userInfo);
  return filteredTasks.map((task) => (
    <FragmentWrapper key={task.id}>
      <TaskCard
        task={task}
        setSelectedTask={setSelectedTask}
        categoryIcons={categoryIcons}
        allUsers={allUsers}
      />
    </FragmentWrapper>
  ));
}

// this seems to be the only way to add a key to the TaskCard component
// without using a div or other element that would break the styling
function FragmentWrapper({ children }) {
  return children;
}
