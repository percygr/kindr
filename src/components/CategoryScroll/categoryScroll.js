import "./categoryScroll.css";
import allIcon from "../../imgs/icons/all.png";
import { useState } from "react";

export default function CategoryScroll({ categoryIcons, setCategoryFilter }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleCategoryClick(categoryId) {
    if (categoryId === 0) {
      setSelectedCategory(null);
      setCategoryFilter(categoryId);
    } else {
      setSelectedCategory(categoryId);
      setCategoryFilter(categoryId);
    }
  }

  return (
    <div className="main-container">
      <div className="scroll-container">
        <div
          className={`image-container all-icons ${selectedCategory === null ? "selected" : ""}`}
          onClick={() => handleCategoryClick(0)}
        >
          <img className="images" src={allIcon} alt="all-icons" />
        </div>
        {categoryIcons.map((categoryIcon) => {
          return (
            <div
              className={`image-container ${selectedCategory === categoryIcon.id ? "selected" : ""}`}
              key={categoryIcon.id}
              onClick={() => handleCategoryClick(categoryIcon.id)}
            >
              <img
                className="images"
                src={categoryIcon.image}
                alt={categoryIcon.name}
              />
              <p className="category-title">{categoryIcon.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// import all icon

// take in the categoryIcons prop ✅
// map over the categoryIcons array

// for each categoryIcon, return a div with the icon and the name
// add an onClick to the div that calls setCategory with the category name
// add a className to the div that is "selected" if the category name matches the category prop
// add a className to the div that is "not-selected" if the category name does not match the category prop
