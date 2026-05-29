import React from "react";
import { Tile } from  '../tile/Tile'

export const TileList = ( { array, onDelete } ) => {
  return (
    <ul>
        {array.map((obj, index) => {
          const { name, ...description } = obj
          return (
            <div className="tile-list">
              <Tile key={index} name={name} description={description} onDelete={onDelete} />
            </div>
          )
        })}
    </ul>
  );
};
