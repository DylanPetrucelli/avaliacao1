import React, { useState } from 'react';
import Textbox from '../Textbox/Textbox';
import Dropdown from '../Dropdown/Dropdown';
import Radio from '../Radio/Radio';
import Botao from '../Botao/Botao';


const Forms = (props) => {

  const secoes = [
    'Computadores',
    'Acessórios',
    'Impressoras',
    'Games',
    'Gadgets'
  ]
  
  const marcas = [
    'HP',
    'Dell',
    'Positivo',
    'Asus',
    'Xingling'
  ]

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [marca, setMarca] = useState('HP');
  const [secao, setSecao] = useState('Computadores');
  const [uso, setUso] = useState('');

const aoSalvar = (evento) => {
  evento.preventDefault()
  console.log('form submitted =>', nome, preco, marca, secao, uso);
  props.aoCadastrar (
    {
      "Nome" : nome,
      "Preço" : preco,
      "Marca" : marca,
      "Seção" : secao,
      "Uso" : uso
    }
  )

}
    
    return (
        <div>
            <form onSubmit={aoSalvar}>
              <Dropdown label="Seção" secao={secoes} aoAlterar={valor => setSecao(valor)} />
              <Dropdown label="Marca" secao={marcas} aoAlterar={valor => setMarca(valor)}/>
              <Textbox label="Nome" placeholder="Digite o nome" aoAlterar={valor => setNome(valor)}/>
              <Textbox label="Preço" placeholder="Digite o preço" aoAlterar={valor => setPreco(valor)}/>
              <Radio aoAlterar={valor => setUso(valor)} />
              <Botao label="Adicionar" />
            </form>
        </div>
        
    );
}

export default Forms;