//import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryTiles({ setCategory, categoryIcons }) {
  const navigate = useNavigate();

  function handleCategoryClick(categoryId) {
    setCategory(categoryId);
    //console.log("Category clicked: ", categoryId);
    navigate(`/create`);
  }

  return (
    <div>
      <h1>Please select a category for this task</h1>
      <div className="category-container">
        <div className="category-container-top">
          <div onClick={() => handleCategoryClick(1)} className="category-item">
            <img src={categoryIcons[0].image} width="150" />
            Transport
          </div>
          <div onClick={() => handleCategoryClick(2)} className="category-item">
            <img src={categoryIcons[1].image} width="150" />
            Gardening
          </div>
          <div onClick={() => handleCategoryClick(3)} className="category-item">
            <img src={categoryIcons[2].image} width="150" />
            Shopping
          </div>
        </div>
        <div className="category-container-bottom">
          <div onClick={() => handleCategoryClick(4)} className="category-item">
            <img src={categoryIcons[3].image} width="150" />
            Housework
          </div>
          <div onClick={() => handleCategoryClick(5)} className="category-item">
            <img src={categoryIcons[4].image} width="150" />
            Delivery
          </div>
          <div onClick={() => handleCategoryClick(6)} className="category-item">
            <img src={categoryIcons[5].image} width="150" />
            Other
          </div>
        </div>
      </div>
    </div>
  );
}
