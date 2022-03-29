import React, { useState } from "react";
import "./headerStyle.css";
import medIcon from "../images/icon.png";
import searchIcon from "../images/searchIcon.png";
import ServiceMenu from "./servicemenu";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";




const Header = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="header">
      <div className="mainIcon">
        <img
          src={medIcon}
          alt="Med Kit Icon"
          style={{ padding: "10px 50px" }}
        />
      </div>

      <div className="clickables">
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">The Team</Link>
          </li>
          <li>
            <div>
              {
            visibility?<ServiceMenu/>:null
          }
          </div>
          
          <button onClick={() => setVisibility(!visibility)}>
       Services</button>
          </li> 
          {/* <li>Insurance</li>
                    <li>Your Location</li> */}
        </ul>
      </div>

        <img 
        className="SearchArea"
        src={searchIcon}
         width={60}
         height={60}
         alt="Search Bar Icon" />
    </div>
  );
};

export default Header;
