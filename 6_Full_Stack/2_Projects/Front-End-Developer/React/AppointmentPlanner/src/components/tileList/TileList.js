import React from "react";
import { Tile } from  '../tile/Tile'

export const TileList = ( { array } ) => {
  return (
    <ul>
        {array.map((obj, index) => (
          <Tile key={index} name={obj.name} description={obj.description} />
        ))}
    </ul>
  );
};
