import { useEffect, useState } from "react"

export const Message = () => {


    const [cords, setCords] = useState({x:0, y:0});

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            setCords({ x, y })

        }

        window.addEventListener('mousemove', onMouseMove); 

    
      return () => {
          window.removeEventListener('mousemove', onMouseMove); 
          console.log('El evento se ha eliminado de la pantalla');
        
      }
    }, [])
    

  return (

    <>
        <div>
            <h3 className="text-center text-danger">El usuario ya existe!</h3>
            {
                JSON.stringify(cords)
            }
        </div>
    
    
    </>
  )
}
