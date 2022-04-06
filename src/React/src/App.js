import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
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
