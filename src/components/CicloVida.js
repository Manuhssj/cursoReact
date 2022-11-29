import React, {Component} from 'react';

class Reloj extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return <h3>{this.props.hora}</h3>
    }
    
}

export default class CicloVida extends Component {
    constructor(props){
        super(props);
        console.log(0,"El componente se inicializa, aùn no esta en el DOM");


        this.state={
            hora: new Date().toLocaleTimeString()
        }

        this.temporizador = null

        
    }
    
    componentDidMount(){
        console.log(1,"El componente ya se encuentra en el DOM");
    }

    componentDidUpdate(prevProps, prevState){
        console.log(2, "El estado o las props del componente han cambiado");
        console.log(prevProps);
        console.log(prevState);
    }

    componentWillUnmount(){
        console.log(3, "El comoponente ha sido eliminado del DOM ");
    }
        tictac = () => {

            this.temporizador =setInterval(() => {
                this.setState({
                    hora:new Date().toLocaleTimeString(),
                });
            }, 1000);
        }

    iniciar = () =>{
        this.tictac();
    }   
    
    detener = () =>{
        clearInterval(this.temporizador)
    }
    render(){

        console.log(4,"El componente se redibuja por algun cambio en el DOM");
        return(
            <>
            <h2>Ciclo de Vida de los Componentes de Clase</h2>
            <Reloj hora={this.state.hora}/>
            <button onClick={this.iniciar}>Iniciar</button>
            <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}
