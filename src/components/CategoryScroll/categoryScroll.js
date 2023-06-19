import "./categoryScroll.css";
//import allIcon from "../../imgs/icons/all.png";

export default function CategoryScroll({ categoryIcons }) {
  return (
    <div className="main-container">
      <div className="scroll-container">
        {/* <div className="image-container">
          <img className="images" src={allIcon} alt="all-icons" />
        </div> */}
        {categoryIcons.map((categoryIcon) => {
          return (
            <div className="image-container" key={categoryIcon.id}>
              <img
                className="images"
                src={categoryIcon.image}
                alt={categoryIcon.name}
              />
            </div>
          );
        })}
      </div>

      {/* <div>CategoryScroll says: category selected: {category}</div> */}
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
