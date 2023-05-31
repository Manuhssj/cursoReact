import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
    }
    useEffect( () => {
        getImages()
        
    }, []);

    return (
        <>
            <div className='container'>                
                <h3 className='text-center'> {category} </h3>
            </div>
            
            <div className='card-grid'>
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
