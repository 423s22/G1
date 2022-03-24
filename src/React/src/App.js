import "./App.css";
import Header from "./Components/header";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [screen, setScreen] = React.useState("HomePageContent");

  return (
    <div>
      <Header />
      {/* <nav>
        <button onClick={() => setScreen("HomePageContent")}>Home</button>
        <button onClick={() => setScreen("AboutUs")}>About Us</button>
        <button onClick={() => setScreen("PersonPage")}>Person Details</button>
        <button onClick={() => setScreen("ProductPage")}>Products</button>
        <button onClick={() => setScreen("ProductPageSpecific")}>ProductsPageSpecific</button>


      </nav>
      { screen === "HomePageContent" ?
      <HomePageContent/>
      :  screen === "AboutUs" ?
      <AboutUs/>
      :  screen === "PersonPage" ?
      <PersonPage/>
      :  screen === "ProductPage" ?
      <ProductPage/>
      :  screen === "AboutUs" ?
      <AboutUs/>
      :  screen === "ProductPageSpecific" ?
      <ProductPageSpecific/>
      : null } */}
    </div>
  );
};

export default App;
