import React from "react";


export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
        </div>
    );
}


Propiedades.defaultProps={
    porDefecto: "Propiedad por default"
}