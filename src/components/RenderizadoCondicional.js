import React, { Component } from "react";

function Login(){
    return(
        <div>
            <button>Login</button>
        </div>
    )
}

function Logout(){
    return(
        <div>
            <button>Logout</button>
        </div>
    )
}

export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props);
        this.state = {
            session: true,
        }
    }
    render(){
        return(
            <div>
                <h2>Renderizado Condicional</h2>
                <div>{this.state.session ? <Login/> : <Logout/>}</div>
            </div>
        );
    }
}