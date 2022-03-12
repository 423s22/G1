import React from "react";
import "./homePageContentStyle.css";
import Footer from "../Components/footer";
import Hank from "../images/header-background.jpg";
import "../index.css";

function HomePageContent() {
  return (
    <div className="home-page-content">
      <div className="flex">
        <div className="hpc-side-column">
          <p className="hp-main-message">WE WANT YOU TO SEE WHAT WE SEE.</p>
        </div>
        <div className="hpc-main-pic">
          <img
            src={Hank}
            alt="Hank"
            style={{ textAlign: "center", height: "100%", width: "100%" }}
          />
        </div>
      </div>
      <div className="break" style={{ left: "100px", top: "900px" }}></div>
      <div className="our-story">
        <div>
          <h1
            style={{
              fontFamily: "BebasNeue",
              padding: "10px",
              fontSize: "100px",
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
            quis sit amet risus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus pharetra sollicitudin orem ac ultricies.
            Vestibulum eget mollis dolor. Donec finibus mi et quam condimentum
            efficitur. Nam in efficitur quam. Sed bibendum nunc odio, vitae
            iaculis nisl interdum quis. Morbi sollicitudin molestie nulla non
            lobortis. Phasellus suscipit consequat condimentum. Aliquam nibh
            tortor, molestie eu eleifend in, feugiat scelerisque erat. Nam
            vulputate lectus in tortor sollicitudin rhoncus. Etiam et sem eu
            ipsum ultrices ornare quis sit amet risus.
          </p>

          <br />
          <br />
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
            src={Hank}
            alt="Hank"
            style={{
              textAlign: "center",
              display: "flex",
              padding: "50px",
              height: "100%",
              width: "100%",
            }}
          />
          <div className="our-story-side-quote">
            <p>"LOREM IPSUM DOLOR SIT AMET"</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePageContent;
