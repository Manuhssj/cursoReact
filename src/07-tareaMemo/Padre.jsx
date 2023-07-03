import { useCallback, useState } from "react";
import { Hijo } from "./Hijo";



export const Padre = () => {

  const numeros = [2,4,6,8,10];
  const [valor, setvalor] = useState(0)

 

  const incrementFather = useCallback(
    (num) => {
      setvalor((valor) => valor + num );
    },
    [],
  )
  
  return (
    <>
      <h1>Padre</h1>
      <p>Total: {valor} </p>
      <hr />
      {
        numeros.map( n => (
          <Hijo
            key={ n }
            numero={ n }
            incrementar={ incrementFather }
          />
        ))
      }
    </>
  )
}
