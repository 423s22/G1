import React from 'react';
import styles from "../styles/FooterStyle.module.css";
import Link from "next/link";

const Footer = () =>{
    return(

<div className={styles.footer}>

<div className={styles.break}></div>

    <nav className={styles.navBottom}>

        <Link href="./ContactUs"><a>Contact Us</a></Link>
        <Link href=""><a>Languages</a></Link>
        <Link href=""><a>Terms</a></Link>
        <Link href="./UserDoc"><a>User Doc</a></Link>
      
    </nav>
</div>

    )
}

export default Footer;