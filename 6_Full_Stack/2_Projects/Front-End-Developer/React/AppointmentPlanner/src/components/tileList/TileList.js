import React from "react";
import { Tile } from  '../tile/Tile'

export const TileList = ( { array } ) => {
  return (
    <ul>
        {array.map((obj, index) => {
          const { name, ...description } = obj
          return (
            <Tile key={index} name={name} description={description} />
          )
        })}
    </ul>
  );
};
