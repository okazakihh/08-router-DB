import React from "react";
import { useParams } from "react-router";
import { Characters } from "../models/Characters";

const CharacterScreen = ({ history }) => {
  const { id } = useParams();

  const { type, name, description } = Characters.find(
    (character) => character.id === id
  );

  const path = `/assets/${type}-${id}.png`;

  const handleBack = () => {
    history.goBack();
  };

  return (
    
    <div className="container row mt-5 border-light mb-3" >
      <div className="col-8">
        <img
          className="img-thumbnail text-dark bg-info mb-3 "
          style={{
            width: "50%",
            height: "500px",
            
           
          }}
          src={path}
          alt={id}
        />
      </div>
      <div className="col-4 " >
        <h2>Nombre: {name}</h2>
        <p>Desccripción: {description}</p>

        <button onClick={handleBack} className="btn btn-outline-warning">
          Go Back
        </button>
      </div>
    </div>
    
  );
};

export default CharacterScreen;
