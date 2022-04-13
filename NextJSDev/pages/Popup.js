import React from "react";
import styles from "../styles/ContactUs.module.css";

function Popup(props){
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>
                <button className={styles.understandBtn}>I understand</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup