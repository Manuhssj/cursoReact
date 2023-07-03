import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = ( iterationNumber = 100) => {
  for (let a = 0; a < iterationNumber; a++) {
    console.log('Ahi vamos...');
  }
  return `${ iterationNumber } iteraciones realizadas`
}


export const MemoHook = () => {
    const [show, setshow] = useState(true)
    const {counter, increment} = useCounter(4000);

    const memorizedValue = useMemo( () => heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>
        <hr />

        <p> { memorizedValue } </p>
        <button
            onClick={() => increment(1)}
            className="btn btn-primary">
            +1
        </button>
        <button
            onClick={() => setshow(!show)}
            className="btn btn-outline-primary ms-3">
            { JSON.stringify(show) }
        </button>
    </>

  )
}
