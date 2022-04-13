import React from "react";

function Popup(props){
    return (props.trigger) ? (
        <div>
                {props.children}
        </div>
    ) : "";
}

export default Popup