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
            <div className={styles.maincomp}>
              <p>Questions or Comments? Send us a Message!</p>
              <div className={styles.innercomp}>

                  <input 
                  className={styles.name}
                  style={{marginRight:"5%"}}
                  type="text"
                  placeholder="First Name"
                  />

                  <input 
                  className={styles.name}
                  style={{marginleft:"5%"}}
                  type="text"
                  placeholder="Last Name"
                  />

                  <input 
                  className={styles.email}
                  type="text"
                  placeholder="Email"
                  />

                  <input 
                  className={styles.message}
                  type="text"
                  placeholder="Message"
                  />

                  <button
                  className={styles.submit}>
                  <h3>Submit</h3>
                  </button>

              </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default ContactUs;