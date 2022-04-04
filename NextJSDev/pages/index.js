import axios from "axios";
import headerBackground from "../public/img/headerBackground.jpg";
import styles from "../styles/Home.module.css";

export default function Home({ productList }) {
  return (
    <div className={styles.HomePageContent}>
      <div className={styles.hpcSideColumn}>
        <p className={styles.hpMainMessage}>WE WANT YOU TO SEE WHAT WE SEE.</p>
      </div>
      <div className={styles.hpcMainPic}>
        <img
          src={headerBackground}
          alt="Hero"
          style={{ textAlign: "center", height: "100%", width: "100%", marginLeft:"-50px", marginTop:"35px",}}
        />
      </div>
    <div className={styles.break}></div>
    <div className={styles.ourStory}>
      <div>
        <h1
          style={{
            fontFamily: "BebasNeue",
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
        <img
          src="../public/img/headerBackground.jpg"
          alt="Hero"
          style={{
            textAlign: "center",
            display: "flex",
            padding: "50px",
            height: "100%",
            width: "50%",
          }}
        />
        <div className={styles.ourStorySideQuote}>
          <p>"LOREM IPSUM DOLOR SIT AMET"</p>
        </div>
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
