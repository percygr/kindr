import { Link } from "react-router-dom";
import HeartIcon from "../components/HeartIcon/heartIcon.js";

export default function SuccessPage() {
  return (
  <div>
    <h1>Congratulations!</h1>
      <HeartIcon />
    <Link to='/'>
      <button className="button">Home</button>
    </Link>
    <Link to='/mytasks'>
      <button className="button">My Tasks</button>
    </Link>
  </div>
    );
} 
