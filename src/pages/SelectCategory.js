import { Link } from "react-router-dom";
import CategoryTiles from "../components/CategoryTiles/categoryTiles.js";

export default function SelectCategoryPage() {
  return (
    <div>
  <CategoryTiles />
  <Link to="/create"> 
  <button className="button">Next</button>
  </Link>
  
  </div>
  )
}
