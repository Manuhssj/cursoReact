import React from 'react';
import ReactDOM from 'react-dom/client';

const objectMessage = {
    message: 'Hola mundo',
    name: 'Manuel',
};

const funcionMsj = (edad) =>{
    return edad;
}
export const FirstApp = ({title,subtitle}) => {
    return (
        <>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
        </>
    );
}