import { Link } from "react-router-dom";
import HeartIcon from "../components/HeartIcon/heartIcon.js";

export default function SuccessPage() {
  return (
  <div>
    <p className="h1">Thanks for posting!</p>
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
