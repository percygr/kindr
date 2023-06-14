//import { is } from "@babel/types";
import { createClient } from "@supabase/supabase-js";

export default function TaskInfo({
  isEditable,
  categoryIcons,
  category,
  selectedTask,
  tasks,
}) {
  let categoryID = 0;
  let thisTask = {};

  const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_KEY
  );

  console.log(isEditable);

  if (isEditable) {
    categoryID = category - 1;
  } else {
    thisTask = tasks.find((task) => task.id === selectedTask);
    categoryID = thisTask.category_id - 1;
  }

  async function writeTask() {
    // write to database
    const { error } = await supabase.from("tasks").insert({
      title: "insert test - title",
      description: "description - insert test",
      location: "location - insert test",
      duration: "duration - insert test",
      creator_id: 1,
      category_id: 1,
      status_id: 1,
    });

    if (error) {
      console.log("error", error);
    }

    //redirect to thank you page
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
      {isEditable && (
        <button className="button" onClick={() => writeTask()}>
          Submit
        </button>
      )}
    </div>
  );
}
