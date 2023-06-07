import React, { useState } from 'react'
import { useCounter } from '../hooks/useState/useCounter'

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter(0)

  return (
    <>
        <hr/>
        <h2 className='text-center'>CounterWithCustomHoook</h2>
      
        <h3 className="text-dark">
          Counter: {counter}
        </h3>
      
      
        <hr/>
        <div className="btn-group">
          <button 
            className="btn btn-primary" 
            onClick={() => increment(2)}
          >
          +1
          </button>
          <button 
            className="btn btn-danger" 
            onClick={() => decrement(2)}
          >
          -1
          </button>
          <button 
            className="btn btn-warning" 
            onClick={reset}
          >
          reset
          </button>
        </div>
      

    
    
    </>
  )
}
