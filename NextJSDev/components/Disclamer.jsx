import React from 'react';
import styles from "../styles/Disclaimer.module.css";
import Popup from '../pages/Popup';
import Link from "next/link";
import { useState } from 'react';

const Disclaimer = () => {
    const [visibility, setVisibility] = useState(true);
    return (
        <div>
            <div>
                <Popup trigger={visibility}>
                <div className={styles.component}>
                <div>
                    <h1 className={styles.title} 
                    style={{fontFamily: "BebasNeue",}}>
                        Hello!
                    </h1>
                </div>
                <div className={styles.body}
                style={{fontFamily: "BebasNeue",}}>
                    <p>
                    We just wanted to let you know that although we
                    are providing you with the prices for certain
                    procedures from various hospitals, it doesn’t
                    cover the whole picture for what the patient
                    will pay. We want to give you an overall view
                    of the general cost, but encourage you to 
                    discuss the full cost with the hospital of
                    your choosing. Thanks for being here!
                    </p>
                </div>
                <div>
                <Link href="../"><button className={styles.btn}
                style={{fontFamily: "BebasNeue",}}>Take Me Back</button></Link>

                <button onClick={()=> setVisibility(false)} className={styles.btn}
                style={{fontFamily: "BebasNeue",}}>I Understand</button>
                </div>
                </div>
                </Popup>
            </div>
            </div>

    );
  };
  
  export default Disclaimer;