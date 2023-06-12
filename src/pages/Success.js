import { Link } from "react-router-dom";
import HeartIcon from "../components/HeartIcon/heartIcon.js";

export default function SuccessPage() {
  return (
  <div>
    <p>This is the success page</p>
    <HeartIcon />
    <Link to='/'>
    <button>Home</button>
    </Link>
    <Link to='/mytasks'>
    <button>My Tasks</button>
    </Link>
    
  </div>
    );
}
