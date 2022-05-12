//import styles from "../../styles/Team.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import ProductDetailedCard from "../../components/ProductDetailedCard";

const Product = ({ product }) => {
  return (
    <div>
      <ProductDetailedCard key={product._id} product={product} />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  // const res = await axios.get(
  //   `http://localhost:3000/api/products/${params.id}`
  // );
  const res = await axios.get(
    `https://cranky-banach-68238c.netlify.app/api/products/${params.id}`
  );

  return {
    props: {
      product: res.data,
    },
  };
};

export default Product;
