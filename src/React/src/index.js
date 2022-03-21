import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePageContent from './Components/homepagecontent';
import AboutUs from './Components/aboutus';
import PersonPage from './Components/personpage';
import ProductPage from './Components/productpage';
import ProductPageSpecific from './Components/productpagespecific';
import { BrowserRouter as Router, Routes,
  Route } from 'react-router-dom';

const app = (
    <Router>
        <App />
        <Routes>
          <Route path="/" element={<HomePageContent/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/PersonPage" element={<PersonPage/>} />
          <Route path="/ProductPageSpecific" element={<ProductPageSpecific/>} />
          <Route path="/ProductPage" element={<ProductPage/>} />
        </Routes>
    </Router>
)



ReactDOM.render(app, document.getElementById('root'));
