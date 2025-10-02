const Rating = () =>{
  const stars = Array.from({length:5}, (_, i) => i + 
  1);

  return ( 
  <div className="rating-container">
    <h2>Rate Your Expericence</h2>
    <div className="star">
      {stars.map((star) => (
        <span key={star} className="star">
          {'\u2605'}
        </span>
      )) }
    </div>
  </div> )
}

export default Rating;