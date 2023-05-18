
export const GifGrid = ({ category }) => {

    const gifs = [1,2,3,4,5]

    return (
        <>
            <h4> {category} </h4>
            {
                gifs.map( (gif) => (
                    
                    <p>{gif}</p>
                    
                ))

            }
        </>
    )
}
