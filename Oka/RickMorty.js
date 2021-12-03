import React, {useEffect,useState} from 'react';
import Character from '../Oka/personajes';
import Pagination from '../Oka/NexPrevious';


export default function App(){
    const[personajes, setPersonajes] = useState([])
    const[info, setInfo] = useState ({})
    const UrlApi = "https://rickandmortyapi.com/api/character"
    const FetchApi = (url)=>{
        fetch(url)
        .then(respuesta=> respuesta.json())
        .then(data=> {setPersonajes(data.results); setInfo(data.info)})
        .catch(error=>console.log(error))
    }
    useEffect(() =>{
        FetchApi(UrlApi)
    }, [])
    const onPrev=()=>{
        FetchApi(info.Anterior)
    }
    const onNext=()=>{
        FetchApi(info.Siguiente)
    }
    return(
        <>
        <h1>Rick and Morty </h1>
        <Pagination prev={info.Anterior} next={info.Siguiente} onPrev={onPrev} onNext={onNext} />

            <div className="contenedor-grid">
                <Character personajes={personajes} />
            </div>
        </>
    )
}