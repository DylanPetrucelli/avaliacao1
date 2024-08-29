import React from "react";
import "./Lista.css";


const Lista = (props) => {
    return (
        <div className="lista">
            <h2>Itens cadastrados</h2>

            {props.objetos.map( (objeto, index) => (
                
                <div key={index}>

                    <strong>Nome: {objeto.Nome} </strong>  <br/>
                    <strong>Preço: </strong> {objeto.Preço} <br/>
                    <p>{objeto.Uso}</p>
                    <hr />
                </div>
            ))}

        
        </div>
    )
}

export default Lista;