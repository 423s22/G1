import React from "react";
import Footer from "../Components/footer";
import "./aboutUsStyle.css";
import profilePic from "../images/profilePic.jpeg";
import AlysePic from "../images/AlysePic.jpg";
import LukePic from "../images/LukePic.JPG";
import MichealPic from "../images/MichealPic.jpg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="overallBackgroundColor">
      <h1
        style={{
          marginTop:0,
          fontFamily: "BebasNeue",
          fontSize: "100px",
          textAlign: "center",
        }}
      >
        THE TEAM
      </h1>
      <div>
        <div style={{ display: "flex" }}>
          <div className={"profile-style"}>
            <img
              src={profilePic}
              alt="placeholder for profile pic"
              style={{ height: "80%" }}
            />
            <p>
              <Link to="/PersonPage">profile description goes here</Link>
            </p>
          </div>
          <div className={"profile-style"}>
            <img
              src={profilePic}
              alt="placeholder for profile pic"
              style={{ height: "80%" }}
            />
            <p>
              <Link to="/PersonPage">profile description goes here</Link>
            </p>
          </div>
          <div className={"profile-style"}>
            <img
              src={profilePic}
              alt="placeholder for profile pic"
              style={{ height: "80%" }}
            />
            <p>
              <Link to="/PersonPage">profile description goes here</Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <div className={"profile-style"}>
            <img
              src={MichealPic}
              alt="placeholder for profile pic"
              style={{ height: "80%" }}
            />
            <p>
              <Link to="/PersonPage">Micheal: Backend Coder</Link>
            </p>
          </div>
          <div className={"profile-style"}>
            <img
              src={AlysePic}
              alt="placeholder for profile pic"
              style={{ height: "80%" }}
            />
            <p>
              <Link to="/PersonPage">Alyse: FrontEnd Coder</Link>
            </p>
          </div>
          <div className={"profile-style"}>
            <img
              src={LukePic}
              alt="placeholder for profile pic"
              style={{ height: "80%" }}
            />
            <p>
              <Link to="/PersonPage">Luke: FrontEnd Coder</Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
