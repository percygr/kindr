import { useNavigate } from "react-router-dom";
import "./taskcard.css";
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export default function TaskCard({ task, setSelectedTask, categoryIcons }) {
  const navigate = useNavigate();
  const [creatorName, setCreatorName] = useState("");

  useEffect(() => {
    async function fetchCreatorName() {
      const { data, error } = await supabase
        .from("kindr_users")
        .select("firstname, surname")
        .join("tasks", { "tasks.creator_id": "kindr_users.id" })
        .eq("tasks.id", task.id);
      if (error) {
        console.log("error", error);
      } else if (data) {
        const { firstname, surname } = data[0];
      console.log(data);
        setCreatorName(`${firstname} ${surname}`);
      }
    }
    fetchCreatorName();
  }, [task.id]);

  function handleSelectTask(taskId) {
    return () => {
      setSelectedTask(taskId);
      navigate(`/view`);
    };
  }
  
// async function getCreatorName(taskId) {
//   console.log("taskId", taskId)
//   const { data, error } = await supabase
//   .from('kindr_users')
//   .select('firstname, surname')
//   .join('tasks', { 'tasks.creator_id': 'kindr_users.id' })
//   .eq('tasks.id', taskId);
//   if (error) {
//     console.log("error", error);
//   }
//   return data;
// }

  return (
    <div onClick={handleSelectTask(task.id)} className="task-card">
      <div className="image">
        <img
          className="category-icon"
          src={categoryIcons[task.category_id - 1].image}
          alt="task-icon"
        />
      </div>

      <div className="card-info">
        <h2 className='task-title-container'>{task.title}</h2>
        <p><strong>Duration: </strong>{task.duration}</p>
        <p><strong>Location: </strong>{task.location}</p>
        <p><strong>Posted by: </strong>{creatorName}</p>
      </div>
    </div>
  );
}

