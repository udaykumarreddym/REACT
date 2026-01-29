const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines = [],
    avgRating,
    costForTwo,
    cloudinaryImageId,
  } = resData.info;

  const image =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    cloudinaryImageId;

  return (
    <div className="res-card">
      <img className="res-logo" src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
