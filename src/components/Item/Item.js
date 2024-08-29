import React from "react";

const Item = (props) => {

    console.log(props.nome);
    return (
        <div>
            <div>
                Foto da marca {props.marca}
            </div>
            <div>
                <h4>Nome: {props.nome}</h4>
                <h5>Preço: {props.preco}</h5>
                <h5>Condição: {props.uso}</h5>
            </div>
        </div>
    )
}

export default Item;