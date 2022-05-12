//import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ productList }) => {
  return (
    <div>
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4">
          <div className="text-center mb-4 opacity-90">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
              {productList.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
