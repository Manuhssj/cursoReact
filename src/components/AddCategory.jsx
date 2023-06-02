import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = ({target}) => { 
        setInputValue( target.value );
    } 

    const onSumbit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length < 1 ) return;
        
        // setCategories( categories => [ inputValue, ...categories ])
        onNewCategory( inputValue.trim() )
        setInputValue('');
    }


    return (
        <form onSubmit={ (event) => onSumbit(event) }>
            <input 
                className="col-8"
                type="text"
                placeholder="Buscar gifs..."
                value={ inputValue }
                onChange={ onInputChange }
            />
            <button className="ov-btn-slide-close ms-1 mb-1" value={inputValue} onChange={onInputChange}>Search</button>
        </form>
  )
}
