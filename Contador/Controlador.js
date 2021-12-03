import React from 'react';

class Contador extends React.Component{
    state ={
        numero: 7
    }

    incrementar = () =>{
        this.setState({
            numero: this.state.numero +1
        })
        
    }
    decrementar = () =>{
        this.setState({
            numero: this.state.numero -1
        })
        if(this.state.numero <0.5){
            this.setState({numero:this.state.numero=0})
        }
        
    }
    
   reiniciar = () =>{
        this.setState({
            numero: this.state.numero =0
        })
        
    }

    render(){
        return(
            <div>
                <h1>{this.state.numero}</h1>
                <button onClick={this.incrementar}>+</button>
                <button onClick={this.decrementar}>-</button>
                <button onClick={this.reiniciar}>Reiniciar</button>
            </div>
        )
    }
}
export default Contador;