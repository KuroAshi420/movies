import React from "react";
import StarRatingComponent from "react-star-rating-component";

export default function List(props) {
  return (
    <div className="affich">
      {props.items2.map((el, index) => (
        <div className="card">
          <div className="card-rating">
            <StarRatingComponent value={el.rating} />
          </div>
          <div className="card-container"></div>
          <div className="card-name">{el.input}</div>
        </div>
      ))}
    </div>
  );
}
