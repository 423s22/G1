import axios from "axios";
import Head from "next/head";
import Image from 'next/image'
import Layout from "../components/Layout";
import headerBackground from "../public/img/headerBackground.jpg";
import styles from "../styles/Home.module.css";

export default function Home({ productList }) {
  return (
    <div className={styles.HomePageContent}>
      <div style={{ display: "flex" }}>
        <div className={styles.hpcSideColumn}>
          <p className={styles.hpMainMessage}>WE WANT YOU TO SEE WHAT WE SEE.</p>
        </div>
        <Image
            src={headerBackground}
            alt="Hero"
            width = {1005}
            height = {698}
        />
      </div>
      <div className={styles.break}></div>
      <div className={styles.ourStory}>
        <h1
          style={{
            fontFamily: 'Bebas Neue',
            padding: "10px",
            fontSize: "100px",
            color:"#234473",
            textAlign: "center",
          }}
        >
          OUR STORY
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra sollicitudin orem ac ultricies. Vestibulum eget mollis
          dolor. Donec finibus mi et quam condimentum efficitur. Nam in
          efficitur quam. Sed bibendum nunc odio, vitae iaculis nisl interdum
          quis. Morbi sollicitudin molestie nulla non lobortis. Phasellus
          suscipit consequat condimentum. Aliquam nibh tortor, molestie eu
          eleifend in, feugiat scelerisque erat. Nam vulputate lectus in
          tortor sollicitudin rhoncus. Etiam et sem eu ipsum ultrices ornare
          quis sit amet risus.
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div className={styles.ourStoryImage}>
          <Image
            src={headerBackground}
            alt="Hero"
            width= {600}
            height= {420}
          />
        </div>
        <div className={styles.ourStorySideQuote}>
          <p>"LOREM IPSUM DOLOR SIT AMET"</p>
        </div>
      </div>
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
