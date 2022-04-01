import React from "react";
import "./serviceMenuStyle.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const ServiceMenu = () => {
    return (
     <div className="wow">
        <ul className="menuStyle">
            <br/>
          <div>
            <Link className="SMinteraction" to="">Allergy Care</Link>
          </div>
          <br/>
          <div>
            <Link className="SMinteraction" to="">Dermatology</Link>
          </div>
          <br/>
          <div>
            <Link className="SMinteraction" to="">Neurology</Link>
          </div>
          <br/>
          <div>
            <Link className="SMinteraction" to="/ProductPage">Radiology</Link>
          </div>
          <br/>
          <div>
            <Link className="SMinteraction" to="">Women' Care</Link>
          </div>
          <br/>
          <div>
            <Link className="SMinteraction" to="">COVID-19</Link>
          </div>
          <br/>
        </ul>
     </div>
    );
  };
  
  export default ServiceMenu;