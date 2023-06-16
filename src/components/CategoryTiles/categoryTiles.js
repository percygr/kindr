import "./categoryTiles.css";

import { useNavigate } from "react-router-dom";

export default function CategoryTiles({ setCategory, categoryIcons }) {
  const navigate = useNavigate();

  function handleCategoryClick(categoryId) {
    setCategory(categoryId);
    navigate(`/create`);
  }

  return (
    <div>
      <h1 className="category-h1">Please select a category for this task</h1>
      <div className="category-container">
        <div className="category-container-inner">
          <div onClick={() => handleCategoryClick(1)} className="category-item">
            <img src={categoryIcons[0].image} alt="Transport" />
            <span>Transport</span>
          </div>
          <div onClick={() => handleCategoryClick(2)} className="category-item">
            <img src={categoryIcons[1].image} alt="Gardening" />
            <span>Gardening</span>
          </div>
          <div onClick={() => handleCategoryClick(3)} className="category-item">
            <img src={categoryIcons[2].image} alt="Shopping" />
            <span>Shopping</span>
          </div>
          <div onClick={() => handleCategoryClick(4)} className="category-item">
            <img src={categoryIcons[3].image} alt="Housework" />
            <span>Housework</span>
          </div>
          <div onClick={() => handleCategoryClick(5)} className="category-item">
            <img src={categoryIcons[4].image} alt="Delivery" />
            <span>Delivery</span>
          </div>
          <div onClick={() => handleCategoryClick(6)} className="category-item">
            <img src={categoryIcons[5].image} alt="Other" />
            <span>Other</span>
            </div>
        </div>
      </div>
    </div>
  );
}
