import React, { useContext } from "react";
import { MixtapeContext } from './MixtapeContext';
import { Song } from './Song'

export const SongList = () => {
  // Your code here! ✨
  const { songs, genre, sortOrder} = useContext(MixtapeContext);

  const filteredSongs = songs.filter(song => genre === "all" || song.genre === genre);

  const sortedSongs = filteredSongs.sort((songA, songB) => sortOrder === "ascending" ? songA.year - songB.year : songB.year - songA.year)

  return (
    <ul>
      {sortedSongs.map(song => <Song {...song} key={`${song.artist}-${song.name}-${song.year}`} />)}
    </ul>
  );
};
