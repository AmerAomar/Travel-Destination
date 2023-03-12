import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/db.json";
import Navigation from "../Navbar/Navbar"; 

const ToursDetails = () => {
  const { id } = useParams();
  const [showFullDescription, setShowFullDescription] = React.useState(false);
  const tour = data.find((tour) => tour.id === id);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="tour-details">
      <Navigation /> 
      <h2>{tour.name}</h2>
      <p>{tour.location}</p>
      <img src={tour.image} alt={tour.name} />
      <div className="description">
        {tour.info && (
          <p>
            {showFullDescription
              ? tour.info
              : `${tour.info.slice(0, 3)}...`}
          </p>
        )}
        {tour.info && tour.info.length > 3 && (
          <button onClick={toggleDescription}>
            {showFullDescription ? "See less" : "See more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ToursDetails;
