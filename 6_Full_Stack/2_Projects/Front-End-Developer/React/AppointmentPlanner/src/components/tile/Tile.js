import React from "react";

export const Tile = ({ key, name, description, onDelete }) => {
  return (
    <div key={key} className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((value, index) => (
        <p key={index} className="tile">{value}</p>
      ))}
      <button className="delete-btn" onClick={() => onDelete(name)}>X</button>
    </div>
  );
};
