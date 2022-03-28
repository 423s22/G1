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
            User Doc
          </h1>
          <p>
          General Use: Click the 3 links up top to navigate through the website’s page.The search bar does not work as of right now.
          <br />
          <br />
          Homepage: The first page you see when you access our website. Give a general overview what we are about
          <br />
          <br />
          The Team: Displays the members of the team that worked on website
          Clicking on a picture will bring up that person’s profile
          <br />
          <br />
          The Team(Specific Profile): Shows some background information for a distinct person
          From left to right on the page we have, the person’s picture, quick bio, and contact information
          <br />
          <br />
          Services: Shows the list of services that we have information on
          List the name of specific services along with a basic description of each. 
          Click on a specific service will bring up information on that service.
          <br />
          <br />
          Services(Specific Service): provide information on selected service
          Able to see the name of service and the universal code for it
          Can see the medical facilities that offer the selected service
          Can see the different prices of the service
          Can see which locations accept insurance for said service.

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
