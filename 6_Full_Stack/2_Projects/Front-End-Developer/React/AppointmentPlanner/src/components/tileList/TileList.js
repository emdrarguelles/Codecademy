import React from "react";
import { Tile } from  '../tile/Tile'

export const TileList = ( { array, onDelete, onStatusUpdate } ) => {
  return (
    <div className="tile-list">
        {array.map((obj, index) => {
          const { name, status, id, ...description } = obj
          return (
            <Tile key={id || index} id={id} name={name} description={description} onDelete={onDelete} onStatusUpdate={onStatusUpdate} status={obj.status} />
          )
        })}
    </div>
  );
};
