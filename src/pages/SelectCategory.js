//import { Link } from "react-router-dom";
import CategoryTiles from "../components/CategoryTiles/categoryTiles.js";

export default function SelectCategoryPage({ setCategory, category }) {
  return (
    <div>

      <CategoryTiles setCategory={setCategory} category={category} />
      {/* <Link to="/create">
        <button>Next</button>
      </Link> */}
    </div>
  );

}
