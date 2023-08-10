
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];


const todoReducer = (state = initialState, action = {}) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }
    
    return state;
}

let todos = todoReducer();

const addTodoAction ={
    type: 'agregar',
    payload: {
        id: 2,
        todo: 'Comprar leche',
        done: false,
    }
}

todos = todoReducer(todos, addTodoAction);

console.log({state: todos});
