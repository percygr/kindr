import Browse from "../components/BrowseTasks/browseTasks";
import CategoryScroll from "../components/CategoryScroll/categoryScroll";

export default function BrowsePage() {
  return (
    <div>
      <p>Browse Tasks Page</p>
      <CategoryScroll />
      <Browse />
    </div>
  );
}
