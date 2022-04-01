import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import HomePageContent from "./Components/homepagecontent";
import AboutUs from "./Components/aboutus";
import PersonPage from "./Components/personpage";
import ProductPage from "./Components/productpage";
import ProductPageSpecific from "./Components/productpagespecific";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [screen, setScreen] = React.useState("HomePageContent");

  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
