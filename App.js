import './App.css';
import './nav.css';
import './footer.css';
import './cuerpo.css';
import React, { useState } from 'react';
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
    
    <div className="App">
      
    </div>
  );
}

export default App;
