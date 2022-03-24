import "./productlist.css";
import { popularProducts } from "../../data";
import Product from "../../components/product/Product";

const ProductList = () => {
  return (
    <div className="productlist">
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
