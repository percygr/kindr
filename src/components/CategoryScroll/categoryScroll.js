import { useEffect } from "react";

export default function CategoryScroll({ category, setCategory }) {
  useEffect(() => {
    console.log("category changed", category);
  }, [category]);

  return (
    <div>
      <p>This is the category scroll function</p>
      <div>Category Selected: {category}</div>
    </div>
  );
}
