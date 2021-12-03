import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contador from './contador/contador';
import Hooks from './contador/Hooks';
import ToDoList from './formulario/formulario';
import App from './App';
import App from './ricky/Rick&Morty';

const notas = ["Amarillo", "Negro"]
ReactDOM.render(
  <React.StrictMode>
    <Contador />
    <Hooks />
    <ToDoList array={notas} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

