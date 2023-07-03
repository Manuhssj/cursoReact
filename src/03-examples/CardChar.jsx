

export const CardChar = ( {data} ) => {

    const { image, name, origin: { name: originName }, location: { name: locationName } } = data ;
    
  return (
    <div className="card col-sm-12 col-xl-4 mx-auto">
        <img src={image} alt="" className="img-fluid" />
        <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            <p className="card-text">Origin: {originName}</p>
            <p className="card-text">Location: {locationName}</p>
        </div>
    </div>
)
}
