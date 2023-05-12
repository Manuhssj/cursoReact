import PropTypes from 'prop-types';

const objectMessage = {
    message: 'Hola mundo',
    name: 'Manuel',
};

const funcionMsj = (edad) =>{
    return edad;
}
export const FirstApp = ({
    title,
    subtitle,
     valor
}) => {
    return (
        <>
            <h1>{ title }</h1>
            {/* No se puede imprimir un objeto sin embargo si se puede imprimir el contenido por 
            propiedad de un objeto */}
            <h2>mi nombre es {objectMessage.name} y tengo {funcionMsj(22)} años</h2>
            <p>{ subtitle }</p>
            <p>con valor de { valor + 1}</p>
        </>
    );
}


// De esta manera las props podemos asignarles un tipado esperado
FirstApp.propTypes = {
    title: PropTypes.string.isRequired, //Tipo de dato al igual que se puede solicitar como requerido
    subtitle: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired,
}

// De esta manera se pueden asignar props default con su valor designado,
// es importante saber que las defaultProps siempre entraran antes que
// las propTypes
FirstApp.defaultProps = {
    title: 'No hay tìtulo',
    subtitle: 'No hay subtitulo'
}