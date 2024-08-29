import React from "react";
import "./Radio.css";

const Radio = (props) => {

    const aoMudar = (evento) => {
        props.aoAlterar(evento.target.id)
    }

    return (
        <div className="a">
            <label htmlFor="Novo">Novo
            <input className="radios" id="Novo" type="radio" name="qualidade" onChange={aoMudar}></input>
            </label>
            
            <label htmlFor="Usado">Usado
            <input className="radios" id="Usado" type="radio" name="qualidade" onChange={aoMudar}></input>
            </label>
            

        </div>
    )
}

export default Radio;