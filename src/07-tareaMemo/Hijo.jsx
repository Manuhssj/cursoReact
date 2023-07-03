import { memo } from "react";

export const Hijo = memo(({incrementar, numero}) => {
  console.log("me volvi a generar");
  return (
    <>
    
      <button
        className="btn btn-primary me-3"
        onClick={ ( ) => incrementar(numero)}
      >
        {numero}
      </button>
    
    
    </>
  )
})
