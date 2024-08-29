import React from "react";
import "./Area.css";
import Item from "../Item/Item";

const Area = (props) => {

    return (

        <section className="area">
            <h3>{props.nome}</h3>

            {props.itens.map( item => <Item key = {item.Nome} nome = {item.Nome} preco = {item.Preço} uso = {item.Uso} marca=  {item.Marca} />)}
        </section>
    )

}

export default Area;