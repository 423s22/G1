//import Image from "next/image";
//import styles from "../styles/ServiceCard.module.css";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className={styles.container}>
        <div width="500" height="500"></div>
      </div>
      <h1 className={styles.title}>{service.title}</h1>
      <span className={styles.product}>${service.prices[0]}</span>
      <p className={styles.desc}>{service.desc}</p>
    </div>
  );
};

export default ServiceCard;
