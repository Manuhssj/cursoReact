
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=yLyjeaeWA1SW2ERn8HsGra1xEaPFalQP&limit=24&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        utl: img.images.downsized_medium.url,
    }));

    return gifs;
}