import React,{useState} from "react";
import './formulario.css';

function AgregarLista(props){
const [tarea,setTarea] = useState("")

   function enviarDatos(e){
      e.preventDefault();
      props.enviarDatos(tarea);
      setTarea("")
   }

   function cambiarDatos(e){
       setTarea(e.target.value);
   }
   

    return(
        <div>
            <h1> To Do List (Lista de tareas) </h1>
        <form onSubmit={enviarDatos}>
            <input type="text" placeholder="Ingresar tarea" 
            onChange={cambiarDatos} name="tarea" value={tarea}/>
            <button type="submit"> Agregar </button>
        </form>
        </div>
    )
}
export default function ToDoList(props){
    const [notas, setNotas] = useState(props.array)

    function AgregarNotas(todo){
        setNotas([...notas,todo]);

    }
    return(
        <div>
            <AgregarLista enviarDatos={AgregarNotas} />
            <ListaDeTareas array={notas}/>
        </div>
    )
}

function ListaDeTareas(props){
    const lista = props.array.map((valor, index)=>
    <li key={index}>{valor}</li>)
    return(
        <ul>{lista}</ul>
    )
}
