import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Tour(props) {
  const { id, image, name } = props.tour;

  return (
    <div>
      <Link to={`/tours/${id}`} tourid={id}>
        <Card className="tour-card">
          <Card.Img
            variant="top"
            src={props.tour.image}
            alt={props.tour.name}
          />
          <Card.Body>
            <Card.Title>{props.tour.name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default Tour;
