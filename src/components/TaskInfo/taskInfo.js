//import { is } from "@babel/types";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TaskInfo({
  isEditable, // false if view only, true if new task
  categoryIcons, // array of icon links, indexed 0-5
  category, // the category chosen in categoryTiles - used when creating a new task
  selectedTask, // task ID of clicked TaskCard - used when viewing a task
  tasks, // array of all tasks, only used when isEditable is false
  getTasks, // function to refresh task list
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  //const [creatorName, setCreatorName] = useState("");
  //const [contactNumber, setContactNumber] = useState("");

  useEffect(() => {
    setIsDisabled(!title || !description || !location || !duration);
  }, [title, description, location, duration]);

  const navigate = useNavigate();

  let categoryID = 0;
  let thisTask = {};

  const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_KEY
  );

  if (isEditable) {
    categoryID = category - 1;
  } else {
    thisTask = tasks.find((task) => task.id === selectedTask);
    categoryID = thisTask.category_id - 1;
  }

  async function writeTask() {
    // write to database
    const { error } = await supabase.from("tasks").insert({
      title: title,
      description: description,
      location: location,
      duration: duration,
      creator_id: 1,
      category_id: category,
      status_id: 1,
    });

    if (error) {
      console.log("error", error);
    }
    getTasks();
    navigate(`/success`);
  }

  async function updateStatusID(newStatusID) {
    const { error } = await supabase
      .from("tasks")
      .update({ status_id: newStatusID })
      .match({ id: thisTask.id });
    if (error) {
      console.log("error", error);
    }
    getTasks();
    navigate(`/success`);
  }

  return (
    <div>
      <img
        src={categoryIcons[categoryID].image}
        alt="category icon"
        width="250"
      />

      <div>Title: </div>
      {isEditable ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a short title"
        />
      ) : (
        <div>{thisTask.title}</div>
      )}
      <div>Description: </div>
      {isEditable ? (
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
        />
      ) : (
        <div>{thisTask.description}</div>
      )}
      {!isEditable && (
        <div>
          <div>Date Posted:</div>
          <div>{thisTask.created_at}</div>
        </div>
      )}
      <div>Location: </div>
      {isEditable ? (
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter a location"
        />
      ) : (
        <div>{thisTask.location}</div>
      )}
      <div>Duration: </div>
      {isEditable ? (
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Enter a duration"
        />
      ) : (
        <div>{thisTask.duration}</div>
      )}

      {!isEditable && (
        <div>
          <div>Name: </div>
          {thisTask.creator_id}
        </div>
      )}
      <div>Contact Information: </div>
      {isEditable ? <div>number / email</div> : <div>number / email</div>}
      {isEditable && (
        <button onClick={() => writeTask()} disabled={!title || !description || !location || !duration} className={isDisabled ? "disable-button" : "button"}>
          Submit
        </button>
      )}

           {!isEditable && thisTask.status_id === 1 && (
        <button className="button" onClick={() => updateStatusID(2)}>
          Accept
        </button>
      )}
      {!isEditable && thisTask.status_id === 2 && (
        <button className="button" onClick={() => updateStatusID(3)}>
          Complete!
        </button>
      )}
      {!isEditable && thisTask.status_id === 3 && (
        <button className="button" onClick={() => updateStatusID(4)}>
          Delete
        </button>
      )}
    </div>
  );
}

