function StarRating({ totalStars }) {
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map(() => {
        return <span className="star text-yellow-400">&#9733;</span>;
      })}
    </div>
  );
}

export default StarRating;
