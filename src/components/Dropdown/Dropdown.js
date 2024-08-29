import React from "react";
import "./Dropdown.css";

const Dropdown = (props) => {

    const aoMudar = (evento) => {
        props.aoAlterar(evento.target.value)
    }   

    return (
        <div className="a">
            <label>{props.label}</label>
            <select onChange={aoMudar}>
                {props.secao.map( item => <option key={item} >{item}</option>)}
            </select>
        </div>
    )

}


export default Dropdown;