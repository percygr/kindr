//import { Link } from "react-router-dom";
import CategoryTiles from "../components/CategoryTiles/categoryTiles.js";

export default function SelectCategoryPage({ setCategory, categoryIcons }) {
  return (
    <div>
      <CategoryTiles setCategory={setCategory} categoryIcons={categoryIcons} />
      {/* <Link to="/create">
        <button>Next</button>
      </Link> */}
    </div>
  );
}
