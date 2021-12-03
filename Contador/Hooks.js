import { render } from '@testing-library/react';
import react from 'react';
import React, {useState} from 'react';

class Contador extends react.Component{
    state= {
        numero: 0
    }


incrementar = () => {
    this.setState ({
        numero:this.state.numero + 3 
    })
    if(this.state.numero >27){
        this.setState({
            numero:this.state.numero =0
        })
    }
}

decrementar = () => {
    this.setState({
    numero: this.state.numero -0.5
    })
    if(this.state.numero <0.5){
        this.setState({numero:this.state.numero =0})
    }
}

reiniciar = () =>{
    this.setState({
        numero:this.state.numero =0
    })
}

render(){
    return(
        <div>
            <h1>{this.state.numero}</h1>
            <button className="boton1" onClick={this.incrementar}>+</button>
            <button className="boton2" onClick={this.decrementar}>-</button>
            <button className="boton3" onClick={this.reiniciar}>Reiniciar</button>
            </div>
    )
}
}

export default Contador;