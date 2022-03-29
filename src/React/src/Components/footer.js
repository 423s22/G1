import React from 'react';
import './footerStyle.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Footer = () =>{
    return(

<div className="footer">

<div className="break"></div>

    <ul className="navBottom">
        <li>
            <Link to="">Contact Us</Link>
        </li>
        <li>
            <Link to="">Languages</Link>
        </li>
        <li>
            <Link to="">Terms</Link>
        </li>
        <li>
            <Link to="/UserDoc">User Doc</Link>
        </li>
    </ul>
</div>

    )
}

export default Footer;