import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setCounter1] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const {counter1,counter2,counter3} = state;


  return (
    <>
        <div className="container">
            <h3 className="text-dark">
                Counter: {counter1}
            </h3>
            <h3 className="text-dark">
                Counter: {counter2}
            </h3>
            <h3 className="text-dark">
                Counter: {counter3}
            </h3>
        </div>
        <div className='container text-center'>
            <hr/>
            <div className="btn-group">
                <button 
                    className="btn btn-primary" 
                    onClick={() => { 
                        setCounter1({
                            ...state,
                            counter1: counter1 + 1
                        }) 
                    }}>
                    +1
                </button>
                <button 
                    className="btn btn-danger" 
                    onClick={() => { 
                        setCounter1({
                            ...state,
                            counter1: counter1 - 1
                        }) 
                    }}>
                    -1
                </button>
            </div>
        </div>
    
    </>
  )
}
