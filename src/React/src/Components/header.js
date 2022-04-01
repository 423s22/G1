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
            <Link className="interaction" to="/">Home</Link>
          </li>
          <li>
            <Link className="interaction" to="/AboutUs">The Team</Link>
          </li>
          <li>
            <button className="interaction" 
            onClick={() => setVisibility(!visibility)}
   
            
          
            style={{
              border:"none",
              fontSize:"20px",
              fontFamily:"inter",
              backgroundColor:"#E5D9CD",
              
            }}>
        Services</button>
      
          </li> 
        </ul>
         <div>
              {
            visibility?<ServiceMenu/>:null
          }
        </div>
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
