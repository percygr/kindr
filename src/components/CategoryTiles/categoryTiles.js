//import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryTiles({ setCategory, category }) {
  const navigate = useNavigate();

  function handleCategoryClick(categoryId) {
    setCategory(categoryId);
    //console.log("Category clicked: ", categoryId);
    navigate(`/create`);
  }

  return (
    <div>
      <p>Category Tiles goes here</p>

      <button onClick={() => handleCategoryClick(1)}>Transport</button>
      <button onClick={() => handleCategoryClick(2)}>Gardening</button>
      <button onClick={() => handleCategoryClick(3)}>Shopping</button>
      <button onClick={() => handleCategoryClick(4)}>Housework</button>
      <button onClick={() => handleCategoryClick(5)}>Delivery</button>
      <button onClick={() => handleCategoryClick(6)}>Other</button>
    </div>
  );
}
