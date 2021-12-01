import react from 'react';

class Contador extends react.Component{
    state ={
        numero: 0
    }
    incrementar = () => {
        this.setState({
        numero: this.state.numero +3
        })
        if(this.state.numero >27){
            this.setState({ numero:this.state.numero =0
        })
        }
    }    

    decrementar = () => {
        this.setState({
        numero: this.state.numero -0.5    
        })

        if(this.state.numero <0.5){
            this.setState({ numero:this.state.numero =0
        })
        }
    }

    reiniciar =() => {
        this.setState({
        numero:this.state.numero =0
        })
    }

    render(){
        return(
            <div>
              <h1>{this.state.numero}</h1>
              <button className="botones" onClick={this.incrementar}> + </button>
              <button className="botones" onClick={this.decrementar}> - </button>
              <button className="botones" onClick={this.reiniciar}>reiniciar</button>
            </div>
        )
}
}
export default Contador;