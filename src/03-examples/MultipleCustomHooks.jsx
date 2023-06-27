import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

  const {counter, increment, decrement, reset} = useCounter(1)
  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)


  
  return (
    <>
      <h1>Rick And Morty Characters</h1>
      <hr/>

      {
        isLoading
          ?(
            <div className='alert alert-info text-center'>
              Loading...
            </div>
          )
          :(data &&(
            <div className="card col-4 mx-auto">
              <img src={data.image} alt="" className="img-fluid" />
              <div className="card-body">
                <h5 className="card-title text-center">{data.name}</h5>
                <p className="card-text">Origin: {data.origin.name}</p>
                <p className="card-text">Loaction: {data.location.name}</p>
              </div>
            </div>
          )
            
          )
          
        }
        <button 
          className="btn btn-primary mt-5 me-3"
          onClick={() => decrement(1)}
          disabled = {counter === 1}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
        </button>
        <button 
          className="btn btn-primary mt-5 "
          onClick={() => increment(1)}
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
        </button>
    </>
  )
}
