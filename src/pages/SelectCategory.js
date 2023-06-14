//import { Link } from "react-router-dom";
import CategoryTiles from "../components/CategoryTiles/categoryTiles.js";

export default function SelectCategoryPage({ setCategory }) {
  return (
    <div>
      <CategoryTiles setCategory={setCategory} />
      {/* <Link to="/create">
        <button>Next</button>
      </Link> */}
    </div>
  );
}
