import React from "react";
import styles from "../styles/UserDoc.module.css"


function UserDoc() {
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
            User Doc
            </h1>
            <p>
            General Use: Click the 3 links up top to navigate through the website's page.The search bar does not work as of right now.
            <br />
            <br />
            Homepage: The first page you see when you access our website. Give a general overview what we are about
            <br />
            <br />
            The Team: Displays the members of the team that worked on website
            Clicking on a picture will bring up that person's profile
            <br />
            <br />
            The Team(Specific Profile): Shows some background information for a distinct person
            From left to right on the page we have, the person's picture, quick bio, and contact information
            <br />
            <br />
            Services: Shows the list of services that we have information on
            List the name of specific services along with a basic description of each. 
            Click on a specific service will bring up information on that service.
            <br />
            <br />
            Services(Specific Service): provide information on selected service
            Able to see the name of service and the universal code for it
            Can see the medical facilities that offer the selected service
            Can see the different prices of the service
            Can see which locations accept insurance for said service.

            </p>
        </div>
    </div>
  );
}

export default UserDoc;
