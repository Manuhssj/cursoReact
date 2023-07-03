import { CardChar, LoadingChar } from './';
import { useCounter,useFetch } from '../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';



export const MultipleCustomHooks = () => {

  const {counter, increment, decrement, reset} = useCounter(1)
  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)

  const { image, name, origin: { name: originName } = {}, location: { name: locationName } = {} } = data || {};
  
  return (
    <>
      <h1>Rick And Morty Characters</h1>
      <hr/>

      {

        isLoading ? (
          <LoadingChar/>
        ) : (
           <CardChar image={image} name={name} origin={originName} location={originName}/>
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
