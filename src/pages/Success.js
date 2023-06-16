import { Link } from "react-router-dom";
import HeartIcon from "../components/HeartIcon/heartIcon.js";


export default function SuccessPage() {
  return (
  <div className = "success">
      <h1>Congratulations - thank you for spreading kindness!</h1>
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
