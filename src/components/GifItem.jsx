
export const GifItem = ({ title, utl }) => {

  return (

    <div className="col-lg-3 m-3 card">
        <img src={utl} alt={title} />
    </div>
    
  )
}
