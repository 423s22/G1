import styles from "../styles/ServiceCard.module.css";
import Link from "next/link";
import ProductCard from "./ProductCard";

const ServicesCard = ({service}) => {
  return (
    <div className={styles.container}>
      <Link href={<ProductCard product={service}/>}> <h3 className={styles.name}> {service.procedure}</h3> </Link>
      <h4 className={styles.code}>{service.code}:</h4>
      <p className={styles.desc}>{service.desc}</p>
    </div>
  );
};

export default ServicesCard;