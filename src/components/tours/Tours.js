import React from "react";
import Tour from "./tour/Tour";
import "./Tours.css";
import data from "../../data/db.json";

function Tours() {
  return (
    <div className="tours-container">
      {data.map((tour) => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </div>
  );
}

export default Tours;
