import { categories } from "../../data";
import CategoryItem from "../categoryItems/CategoryItems";
import "./category.css";

const Category = () => {
  return (
    <div className="category">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Category;
