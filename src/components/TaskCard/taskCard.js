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
        .eq("id", task.creator_id)
        .single();

      if (error) {
        console.log("error", error);
      } else if (data) {
        const { firstname, surname } = data;
        if (firstname !== null) {
          setCreatorName(`${firstname} ${surname}`);
        } else {
          setCreatorName("");
        }
      }
    }

    fetchCreatorName();
  }, [task.creator_id]);

  function handleSelectTask(taskId) {
    return () => {
      setSelectedTask(taskId);
      navigate(`/view`);
    };
  }

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
        <h2 className="task-title-container">{task.title}</h2>
        <p>
          <strong>Duration: </strong>
          {task.duration}
        </p>
        <p>
          <strong>Location: </strong>
          {task.location}
        </p>
        <p>
          <strong>Posted by: </strong>
          {creatorName}
        </p>
      </div>
    </div>
  );
}
