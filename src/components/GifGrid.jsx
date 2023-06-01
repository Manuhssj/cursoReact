import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );


    return (
        <>
            <div className='container'>                
                <h3 className='text-center'> {category} </h3>
            </div>
            
            <div className='card-grid'>
                {
                    isLoading && ( <h3>Cargando...</h3>)
                }
                {images.map( (image) => (
                    
                        <GifItem 
                            key = {image.id}
                            { ...image }
                        />

                    ))
                
                } 
            </div>
                
            

        </>
    )
}
