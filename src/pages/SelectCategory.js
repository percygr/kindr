//import { Link } from "react-router-dom";
import CategoryTiles from "../components/CategoryTiles/categoryTiles";

export default function CategoryTilesPage({ setCategory, categoryIcons }) {
  return (
    <CategoryTiles setCategory={setCategory} categoryIcons={categoryIcons} />
  );
}
