import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Contador from './contador/contador';
import Hooks from './contador/Hooks';
import ToDoList from './formulario/formulario'; 


const notas = ["amarillo","negro"]
ReactDOM.render(
  <React.StrictMode>
    <Contador />
    <Hooks />
    <Hooks2 />
    <ToDoList array={notas}/>
  </React.StrictMode>,
  document.getElementById('root')
);

