import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contador from './contador/contador';
import Hooks from './contador/Hooks';
import ToDoList from './formulario/formulario';
import FichaP from './Ficha/FichaP'
import Tarjetas from './Ficha/FichaP';
import ListaTarjetas from './Ficha/FichaP'


const notas = ["Amarillo","Negro"]
ReactDOM.render(
  <React.StrictMode>
    <Contador />
    <Hooks />
    <ToDoList array={notas}/>
    <FichaP />
    <Tarjetas />
    <ListaTarjetas />
  </React.StrictMode>,
  document.getElementById('root')
);

