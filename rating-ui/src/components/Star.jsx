const Star = ({star, rating, hover, color, 
    ratingClick, hoverEnter, hoverLeave}) => {
    return ( 
        <span 
        onMouseLeave={() => hoverLeave(null)}
        onMouseEnter={() => hoverEnter(star)}
        onClick={() => ratingClick(star)}
        className="star"
        style={{color: star <= (hover || rating) ? color 
     : '#ccc'}}
    >
      {'\u2605'}
     </span>
  );
};
 
export default Star;