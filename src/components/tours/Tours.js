import React from "react";
import data from "../../data/db.json";
import "./Tours.css";

function Tours() {
  return (
    <div className="tours_div">
      {data.map((data) => (
        <div key={data.id} >
          <h2>{data.name}</h2>
          <img src={data.image} alt={data.name} />
          <hr></hr>
        </div>
        
      ))}
    </div>
  );
}

export default Tours;
