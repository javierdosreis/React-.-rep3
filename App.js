import React, { useState } from 'react';
import FichaPersonajes from './fichadepersonaje/FichaPersonajes';
const urlApi= "https://rickandmortyapi.com/api/character";
var fichas=null;

function App() {
 const [isReady, setIsReady ] = useState(false); 
  
fetch(urlApi)
 .then( resp=> resp.json() )  
 .then( json=>{
 fichas=json.data;
 setIsReady(true);
} )
  
  
 return (
isReady ?
   <FichaPersonajes fichas {fichas} />
   :
   <div className "alert alert-info" role="alert">
    <h1> cargando datos... </h1>
   </div>
  );
}

export default app;
