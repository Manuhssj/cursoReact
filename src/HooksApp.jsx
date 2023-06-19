import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { CounterWithCustomHook } from '../src/01-useState/CounterWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

export const HooksApp = () => {
  return (
    <div className="container justify-content-center mb-3">
      <h1 className="text-dark text-center">HooksApp</h1>
      {/* <CounterApp/> */}
      {/* <CounterWithCustomHook/> */}
      {/* <SimpleForm/> */}
      {/* <FormWithCustomHook/> */}
      <MultipleCustomHooks/>
    </div>
  )
}
