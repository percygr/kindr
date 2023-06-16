import { Link } from "react-router-dom";
import HeartIcon from "../components/HeartIcon/heartIcon.js";
import Confetti from "react-confetti";

export default function SuccessPage() {
  const [windowWidth, windowHeight] = [window.innerWidth, window.innerHeight];

  return (
    <div className="success">
      <Confetti width={windowWidth.width} height={windowHeight.height} />
      <h1>Congratulations - thank you for spreading kindness!</h1>

      <HeartIcon />
      <Link to="/">
        <button className="button">Home</button>
      </Link>
      <Link to="/mytasks">
        <button className="button">My Tasks</button>
      </Link>
    </div>
  );
}
