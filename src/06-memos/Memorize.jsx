import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./"

export const Memorize = () => {
    const [show, setshow] = useState(true)
    const {counter, increment} = useCounter(10);
  return (
    <>
        <h1>Counter: <Small value={counter}/> </h1>
        <hr />


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
