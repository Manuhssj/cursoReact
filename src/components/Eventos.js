import react,{ Component } from "react";


export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state={
            contador: 0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e){
        console.log("Sumando ES6")
        this.setState({
            contador: this.state.contador +1
        })
    }

    restar(e){
        
        if(this.state.contador>0){
            console.log("Restando ES6");
            this.setState({
                contador: this.state.contador -1
            })
        }else{
            alert("El contador no puede ser negativo")
        }
    }

    render(){
        return(
            <div>
                <h2>Eventos de Componente de Clase</h2>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}


//Properties initializer
export class EventosES7 extends Component{
    state={
        contador: 0,
    }; 

    // Arrow functions
    sumar = (e) => {
        console.log("Sumando ES7")
        this.setState({
            contador: this.state.contador +1
        })
    }

    restar = (e) => {
        
        if(this.state.contador>0){
            console.log("Restando ES7");
            this.setState({
                contador: this.state.contador -1
            })
        }else{
            alert("El contador no puede ser negativo")
        }
    }

    render(){
        return(
            <div>
                <h2>Eventos de Componente de Clase</h2>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}