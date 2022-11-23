import React, {Component} from 'react';


export default class Padre extends Component {
    state = {
        contador: 0 ,
    }

    incrementarContador = (e)=>{
        this.setState({
            contador: this.state.contador + 1
        })
    }

    decrementarContador = (e)=>{
        if (this.state.contador>0) {
            this.setState({
                contador: this.state.contador - 1
            })
        }else{
            alert("El contador no puede ser negativo")
        }
    }

    render(){
        return(
            <>
                <h2>Comunicacion entre Componentes</h2>
                <Hijo mensaje="Mensaje para el hijo 1"/>
                <Hijo incrementarContador={this.incrementarContador} decrementarContador={this.decrementarContador} mensaje="Mensaje para el hijo 2"/>
            </>
        )
    }
}

function Hijo({incrementarContador,mensaje, decrementarContador}) {
    return (
        <>
        <h3>{mensaje}</h3>
        <button onClick={incrementarContador}>+</button>
        <button onClick={decrementarContador}>-</button>
        </>
    )

}
