import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.desc}>
      WE WANT YOU TO SEE WHAT WE SEE.
      </p>
      <div className={styles.wrapper}>
        {productList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
