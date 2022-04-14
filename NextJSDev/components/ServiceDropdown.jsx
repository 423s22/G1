import React from 'react';
import styles from "../styles/ServiceDropdown.module.css";
import Link from "next/link";

const ServiceDropdown = () => {
    return (
     <div>
        <div className={styles.menuStyle}>
          <div className={styles.SMinteraction}>
                <Link href=""><a>Allergy Care</a></Link>
                <br/>
                <Link href=""><a>Dermatology</a></Link>
                <br/>
                <Link href=""><a>Neurology</a></Link>
                <br/>
                <Link href="./Radiology"><a>Radiology</a></Link>
                <br/>
                <Link href=""><a>Women's Care</a></Link>
                <br/>
                <Link href=""><a>COVID-19</a></Link>
                <br/>
            </div>
        </div>
     </div>
    );
  };
  
  export default ServiceDropdown;