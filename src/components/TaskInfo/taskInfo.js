export default function TaskInfo({
  isEditable,
  categoryIcons,
  category,
  selectedTask,
  tasks,
}) {
  console.log(
    "isEditable",
    isEditable,
    "selected task:",
    selectedTask,
    "category:",
    category
  );

  let categoryID = 0;
  let thisTask = {};

  if (isEditable) {
    categoryID = category - 1;
  } else {
    thisTask = tasks.find((task) => task.id === selectedTask);
    console.log("thisTask:", thisTask);
    categoryID = thisTask.category_id - 1;
  }

  return (
    <div>
      <img
        src={categoryIcons[categoryID].image}
        alt="category icon"
        width="250"
      />
      <div>ID: </div>
      {isEditable ? <input type="text" /> : <div>{thisTask.id}</div>}
      <div>Title: </div>
      {isEditable ? <input type="text" /> : <div>{thisTask.title}</div>}
      <div>Description: </div>
      {isEditable ? <input type="text" /> : <div>{thisTask.description}</div>}
      {!isEditable && (
        <div>
          <div>Date Posted:</div>
          <div>{thisTask.created_at}</div>
        </div>
      )}
      <div>Location: </div>
      {isEditable ? <input type="text" /> : <div>{thisTask.location}</div>}
      <div>Name: </div>
      {isEditable ? <input type="text" /> : <div>{thisTask.creator_id}</div>}
      <div>Contact Number: </div>
      {isEditable ? <input type="text" /> : <div>123-4567</div>}
    </div>
  );
}
