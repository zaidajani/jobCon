import React from "react";
import "bulma/css/bulma.min.css";

function Card() {
  return (
    <div className="column is-4-tablet is-3-desktop">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Card;
