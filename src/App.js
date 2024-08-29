import React, { useState } from 'react';
import './App.css';
import Inpute from './components/input/inpute';
import Area from './components/Area/Area';



function App() {

  const [itens, setItens] = useState( [] )

  const AddItem = (item) => {
    const listaNova = itens.slice();
    listaNova.push(item);
    setItens(listaNova);
    console.log(itens); 
  }

  const areas = [
    {
    nome : 'Computadores',
    corPrimaria : '#57c278',
    corSecundaria : '#d9f7e9'
    },
    {
    nome : 'Acessórios',
    corPrimaria : '#82cffa',
    corSecundaria : '#e8f8ff'
    },
    {
    nome : 'Impressoras',
    corPrimaria : '#a6d157',
    corSecundaria : '#f0f8e2'
    },
    {
    nome : 'Gadgets',
    corPrimaria : '#e06b69',
    corSecundaria : '#fde7e8'
    },
    {
      nome : 'Games',
      corPrimaria : '#e06b69',
      corSecundaria : '#fde7e8'
    }
    ]

  return (
    <div className="App">
      <div>
        <p>desculpa pelo projeto ruim, passei muito tempo correndo atrás de bugs então o css ficou quase inexistente :(</p>
      </div>
      <div className="formulario" >
        <Inpute aoCadastrar={item => AddItem(item) } />
        
      </div>

      {areas.map(area => <Area key={area.nome} nome = {area.nome } corPrimaria={area.corPrimaria} corSecundaria={area.corSecundaria} 
        itens={itens.filter(item => item.Seção === area.nome)} />)}

      

      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
