import React, { useState } from "react";
import "./Textbox.css";

const Textbox = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }
    
    return (
        <div className="a">
            <label>{props.label}</label>
            <input onChange={aoDigitar} placeholder= {props.placeholder} />
        </div>
        
    )
}

export default Textbox;