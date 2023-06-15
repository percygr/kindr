export default function CategoryScroll({ category, setCategory, categoryIcons }) {
  return (
    <div>
      <div>
        {categoryIcons.map((categoryIcon) => {  
          return (
            <div>
              <img src={categoryIcon.image} alt={categoryIcon.name} />
            </div>)})}
      </div>
      <p>This is the category scroll function</p>
      <div>CategoryScroll says: category selected: {category}</div>
    </div>
  );
}


// take in the categoryIcons prop ✅
// map over the categoryIcons array

// for each categoryIcon, return a div with the icon and the name
// add an onClick to the div that calls setCategory with the category name
// add a className to the div that is "selected" if the category name matches the category prop
// add a className to the div that is "not-selected" if the category name does not match the category prop

