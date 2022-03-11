import React, {useState} from 'react';
import './headerStyle.css'
import HomePageContent from '../Components/homepagecontent';
import AboutUs from '../Components/aboutus';
import Footer from '../Components/footer';
import medIcon from '../images/icon.png'
import searchIcon from '../images/searchIcon.png'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";




const Header = () => {
    
    return(
        <div className="header">
            <div className='mainIcon'>

            <img src={medIcon} alt='Med Kit Icon' style={{padding: '10px 50px'}}/> 
            


            </div>
            
            <div className='clickables'>
                <ul className='nav'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">AboutUs</Link></li>
                    <li><Link to="/ProductPage">ProductPage</Link></li>
                    {/* <li>Insurance</li>
                    <li>Your Location</li> */}
                </ul>
               

            </div> 

            
                        
            <div className='searchBar'>
               <div className='searchArea'>
               <img src={searchIcon} alt='Search Bar Icon'/>
               
               </div>
                
            </div>

         
        </div>
        
    )


};

export default Header;