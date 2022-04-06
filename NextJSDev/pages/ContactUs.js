import React from "react";
import styles from "../styles/ContactUs.module.css";

function ContactUs() {
    return (
      <div>
     <div className={styles.container}>
            <h1
            style={{
                fontFamily: "BebasNeue",
                padding: "10px",
                fontSize: "100px",
                color:"#234473",
                textAlign: "center",
            }}
            >
            Contact Us
            </h1>
        
        </div>
      </div>
    );
  }
  
  export default ContactUs;