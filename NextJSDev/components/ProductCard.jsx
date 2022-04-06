//import Image from "next/image";
import styles from "../styles/TeamCard.module.css";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className={styles.container}>
        <div width="500" height="500"></div>
      </div>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.product}>${product.prices[0]}</span>
      <p className={styles.desc}>{product.desc}</p>
    </div>
  );
};

export default ProductCard;
