import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.desc}>
        This data is being injected into the front end by our Api. It is using
        our Products Collection and data model to insert the data below.
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
