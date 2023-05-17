import { useState } from "react"


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('One punch')
    
    const onInputChange = ({target}) => { 
        setInputValue( target.value );
    } 

    const onSumbit = ( event ) => {
        event.preventDefault();
        console.log(inputValue);
        setCategories( categories => [ inputValue, ...categories ])
    }


    return (
        <form onSubmit={ (event) => onSumbit(event) }>
            <input 
                className="col-6"
                type="text"
                placeholder="Buscar gifs..."
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
  )
}
