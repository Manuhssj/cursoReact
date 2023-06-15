import React from 'react'
import { CounterApp } from './components/CounterApp'
import { CounterWithCustomHook } from './components/CounterWithCustomHook'
import { SimpleForm } from './hooks/useEffect/SimpleForm'
import { FormWithCustomHook } from './hooks/useEffect/FormWithCustomHook'

export const HooksApp = () => {
  return (
    <div className="container justify-content-center mb-3">
      <h1 className="text-dark text-center">HooksApp</h1>
      <CounterApp/>
      <CounterWithCustomHook/>
      <SimpleForm/>
      <FormWithCustomHook/>
    </div>
  )
}
