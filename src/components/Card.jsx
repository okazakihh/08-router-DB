import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, type, id }) => {
  const path = `/assets/${type}-${id}.png`;

  return (
    <div
      className="card m-3 col-12 col-md-4 text-dark bg-info mb-50"
      style={{
        width: 300,
        
      }}
    >
      <img loading="lazy" className="card-img-top" src={path} alt={id} />

      <div className="card-body text-dark bg-info mb-3"  >
        <h3 className="card-title">{name}</h3>
        <p className="card-text">
          <Link className="card-link" to={`/character/${id}`}>
            Ver Más...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
