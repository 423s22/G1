import axios from "axios";

import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";

export default function Home({ productList }) {
  return (
    <h1>Landing Page
    here are some more changes
    to stage</h1>
    <p>some more</p>
    <div className={styles.container}>
      <ProductList productList={productList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    "https://cranky-banach-68238c.netlify.app/api/products"
  );
  return {
    props: {
      productList: res.data,
    },
  };
};
