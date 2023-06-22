import { Link } from "react-router-dom";
import HeartIcon from "../components/HeartIcon/heartIcon.js";
import Confetti from "react-confetti";

export default function SuccessPage({ successPath }) {
  const [windowWidth, windowHeight] = [window.innerWidth, window.innerHeight];

  console.log("successPath", successPath);
  let successText = ""
  let showHomeButton = false
  let showMyProfileButton = false
  let showViewTaskButton = false
  let showMyTasksButton = false
  let showBrowseTasksButton = false

  if (successPath === "created") {
    successText = "Thank you for posting a task - a volunteer will be in touch with you soon!"
    showBrowseTasksButton = true
    showMyTasksButton = true
  }
  if (successPath === "accepted") {
    successText = "Thank you for accepting a task - please click 'View Task' to contact the user to arrange a time to complete the task"
    showViewTaskButton = true
    showMyTasksButton = true
  }
  if (successPath === "completed") {
    successText = "Thank you for completing this task and spreading some kindness!"
    showViewTaskButton = true
    showMyTasksButton = true
    showHomeButton = true
  }

  return (
    <div className="success">
      <Confetti width={windowWidth.width} height={windowHeight.height} />
      <h1 className="success-text"> {successText}</h1>

      <HeartIcon />
      {showHomeButton && (
      <Link to="/">
        <button className="button">Home</button>
      </Link>
      )}

      {showMyTasksButton && (
      <Link to="/mytasks"> 
        <button className="button">My Tasks</button>
      </Link>
      )}

      {showViewTaskButton && (
      <Link to="/view"> 
        <button className="button">View Task</button>
      </Link>
      )}

      {showMyProfileButton && (
      <Link to="/profile"> 
        <button className="button">My Profile</button>
      </Link>
      )}

      {showBrowseTasksButton && (
      <Link to="/browse"> 
        <button className="button">Browse Tasks</button>
      </Link>
      )}
    </div>
  );
}
