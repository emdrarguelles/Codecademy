import React, { useContext } from "react";
import { MixtapeContext } from './MixtapeContext';

export const Controls = () => {
  const { songs, genre, setGenre, sortOrder, setSortOrder } = useContext(MixtapeContext);
  const uniqueGenres = [...new Set(songs.map(song => song.genre))];

  return (
    <div className="controls">
      {/* TODO: add some controls! */}
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="all">All</option>
        {uniqueGenres.map((songGenre) => (
          <option value={songGenre} key={songGenre}>
            {songGenre.charAt(0).toUpperCase() + songGenre.slice(1)}
          </option>
        ))}
      </select>
      <button onClick={() => setSortOrder(sortOrder === "ascending" ? "descending" : "ascending")}>{sortOrder.charAt(0).toUpperCase() + sortOrder.slice(1)}</button>
    </div>
  );
};
