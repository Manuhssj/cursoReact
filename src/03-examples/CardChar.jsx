import { useEffect, useLayoutEffect, useRef, useState } from "react";


export const CardChar = ( {data} ) => {

    const { image, name, origin: { name: originName }, location: { name: locationName } } = data ;
    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({
        width: 0 ,
        height: 0
    })

    useLayoutEffect(() => {

        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({
            width: width,
            height: height
        })
    }, [])
    
  return (
    <>
        <div ref={pRef} className="card col-sm-12 col-xl-4 mx-auto " >
            <img  src={image} alt="" className="img-fluid" />
            <div className="card-body">
                <h5 className="card-title text-center"  >{name}</h5>
                <p className="card-text">Origin: {originName}</p>
                <p className="card-text">Location: {locationName}</p>
            </div>
        </div>
        <code>{JSON.stringify(boxSize)}</code>
    </>
)
}
