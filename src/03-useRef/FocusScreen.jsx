import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();
 
    const onClick = () =>{
        inputRef.current.select();
        console.log(inputRef);
    }
  return (
    <>
    
        <h1 className="text-center">Focus screen useRef</h1>
        <hr />

        <div className="col-sm-12 col-xl-6 mt-5">
            <input 
            ref={ inputRef }
            type="text" 
            className="form-control"
            />
            
            <button
            onClick={onClick}
            className="btn btn-primary mt-2"
            >
                Focus
            </button>
        </div>
    
    
    </>
  )
}
