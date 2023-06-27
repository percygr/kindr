//import { is } from "@babel/types";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./TaskInfo.css";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export default function TaskInfo({
  isEditable, // false if view only, true if new task
  categoryIcons, // array of icon links, indexed 0-5
  category, // the category chosen in categoryTiles - used when creating a new task
  selectedTask, // task ID of clicked TaskCard - used when viewing a task
  setSelectedTask, // function to set selectedTask
  tasks, // array of all tasks, only used when isEditable is false
  getTasks, // function to refresh task list
  setSuccessPath, // function to set path for success page
  userInfo, // user info from supabase
  allUsers, // array of all users from supabase
  editMode,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectEmail, setSelectEmail] = useState(false);
  const [selectPhone, setSelectPhone] = useState(false);
  const [selectCategory, setSelectCategory] = useState(false);

  const navigate = useNavigate();

  let categoryID = 0;
  let thisTask = {};

  useEffect(() => {
    setIsDisabled(
      !title ||
        !description ||
        !location ||
        !duration ||
        !(selectEmail || selectPhone)
    );
  }, [title, description, location, duration, selectEmail, selectPhone]);

  useEffect(() => {
    if (selectedTask) {
      const task = tasks.find((task) => task.id === selectedTask);
      setTitle(task.title);
      setDescription(task.description);
      setLocation(task.location);
      setDuration(task.duration);
      setSelectEmail(task.show_email);
      setSelectPhone(task.show_phone);
      setSelectCategory(task.category_id);
    }
  }, [selectedTask, tasks]);

  if (isEditable) {
    if (selectedTask) {
      categoryID = tasks.find((task) => task.id === selectedTask).category_id;
    } else {
      categoryID = category - 1;
    }
  } else {
    thisTask = tasks.find((task) => task.id === selectedTask);
    categoryID = thisTask.category_id - 1;
  }

  function getCreatorName(creatorId) {
    const creator = allUsers.find((user) => user.id === creatorId);
    if (creator) {
      return `${creator.firstname} ${creator.surname}`;
    } else {
      return "";
    }
  }

  async function writeTask() {
    // write to database
    const { error } = await supabase.from("tasks").insert({
      title: title,
      description: description,
      location: location,
      duration: duration,
      creator_id: userInfo.id,
      category_id: category,
      status_id: 1,
      show_email: selectEmail,
      show_phone: selectPhone,
    });

    if (error) {
      console.log("error", error);
    }
    // refresh task list
    getTasks();
    setSuccessPath("created");
    navigate(`/success`);
  }

  function editTask() {
    isEditable = true; // delete this line
    setSelectedTask(thisTask.id);
    //console.log(thisTask);
    //console.log(isEditable);
    navigate("/edit");
  }

  async function updateStatusID(newStatusID) {
    const { error } = await supabase
      .from("tasks")
      .update({
        status_id: newStatusID,
        helper_id: userInfo.id,
      })
      .match({ id: thisTask.id });
    if (error) {
      console.log("error", error);
    }
    getTasks();

    if (newStatusID === 1) {
      setSuccessPath("created");
      navigate(`/success`);
    } else if (newStatusID === 2) {
      setSuccessPath("accepted");
      navigate(`/success`);
    } else if (newStatusID === 3) {
      setSuccessPath("completed");
      navigate(`/success`);
    } else if (newStatusID === 4) {
      setSuccessPath("archived");
      navigate(`/mytasks`);
    }
  }

  function handleSelectEmail() {
    setSelectEmail(!selectEmail);
  }

  function handleSelectPhone() {
    setSelectPhone(!selectPhone);
  }

  function getCreatorEmail(creatorId) {
    const creator = allUsers.find((user) => user.id === creatorId);
    if (creator) {
      return creator.email;
    } else {
      return "";
    }
  }

  function getCreatorPhone(creatorId) {
    const creator = allUsers.find((user) => user.id === creatorId);
    if (creator) {
      return creator.telephone;
    } else {
      return "";
    }
  }

  async function updateTask() {
    //update supabase task id id selectedTask
    const { error } = await supabase
      .from("tasks")
      .update({
        title: title,
        description: description,
        location: location,
        duration: duration,
        show_email: selectEmail,
        show_phone: selectPhone,
        category_id: selectCategory,
      })
      .match({ id: selectedTask });

    if (error) {
      console.log("error", error);
    }
    // refresh task list
    getTasks();
  }

  return (
    <div className="view-card-container">
      <div className="all-info">
        <img
          className="category-logo"
          src={categoryIcons[categoryID].image}
          alt="category icon"
          width="150"
        />

        <div className="info-container">
          {/* <div className="info-text">Title: </div> */}
          {isEditable ? (
            <div>
              <div>Title: </div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a short title"
              />
            </div>
          ) : (
            <div className="task-title">{thisTask.title}</div>
          )}
        </div>

        <div className="info-container">
          {/* <div>Description: </div> */}
          {isEditable ? (
            <div>
              <div>Description: </div>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter a description"
              />
            </div>
          ) : (
            <div className="description-container">{thisTask.description}</div>
          )}
        </div>

        {!isEditable && (
          <div>
            <div>
              <strong>Date Posted: </strong>
              {new Date(thisTask.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
        )}

        <div className="info-container">
          {isEditable ? (
            <div>
              <div>Duration: </div>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Enter a duration"
              />
            </div>
          ) : (
            <div>
              <strong>Duration: </strong>
              {thisTask.duration}
            </div>
          )}
        </div>

        <div className="info-container">
          {isEditable ? (
            <div>
              <div>Location: </div>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter a location"
              />
            </div>
          ) : (
            <div className="location-container">
              <strong>Location: </strong>
              {thisTask.location}
            </div>
          )}
        </div>

        {!isEditable && (
          <div>
            <strong>Posted by: </strong>
            {getCreatorName(thisTask.creator_id)}
          </div>
        )}

        {!isEditable &&
          thisTask.status_id === 2 && ( // contact info only displays on 'active' tasks
            <div className="info-container">
              <h3>Contact Information:</h3>
              {thisTask.show_email && (
                <div>
                  <strong>Email: </strong>
                  {getCreatorEmail(thisTask.creator_id)}
                </div>
              )}
              {thisTask.show_phone && (
                <div>
                  <strong>Telephone: </strong>
                  {getCreatorPhone(thisTask.creator_id)}
                </div>
              )}
              <p></p>
            </div>
          )}

        <div className="info-container">
          {isEditable ? (
            <div>
              <p> How would you like to be contacted? </p>
              <div className="checkbox-container">
                <label htmlFor="email"> Email </label>
                <input
                  type="checkbox"
                  id="email"
                  name="email"
                  checked={selectEmail}
                  onChange={(e) => handleSelectEmail(e.target.value)}
                />
                <label htmlFor="phone"> Phone </label>
                <input
                  type="checkbox"
                  id="phone"
                  name="phone"
                  checked={selectPhone}
                  onChange={(e) => handleSelectPhone(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        {isEditable && !editMode && (
          <button
            onClick={() => writeTask()}
            disabled={isDisabled}
            className={isDisabled ? "disable-button" : "button"}
          >
            Submit
          </button>
        )}

        {editMode && (
          <button className="button" onClick={() => updateTask()}>
            Update
          </button>
        )}

        {!isEditable && thisTask.status_id === 1 && !(thisTask.creator_id === userInfo.id) && (
          <button
            className="button accept-button"
            onClick={() => updateStatusID(2)}
          >
            Accept
          </button>
        )}
        {!isEditable && thisTask.status_id === 2 && (
          <button
            className="button complete-button"
            onClick={() => updateStatusID(3)}
          >
            Mark as Complete
          </button>
        )}
        {((!isEditable && thisTask.status_id === 3) || (thisTask.creator_id === userInfo.id)) && (
          <button
            className="button delete-button"
            onClick={() => updateStatusID(4)}
          >
            Delete
          </button>
        )}
        {!isEditable && thisTask.creator_id === userInfo.id && (
          <button className="button edit-button" onClick={() => editTask()}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

// add edit button to the the not-editable version of the TaskInfo component
// applies to tasks that have statuses 1, 2 and 3 (doesn't need to be in 3, but should make our lives easier)
