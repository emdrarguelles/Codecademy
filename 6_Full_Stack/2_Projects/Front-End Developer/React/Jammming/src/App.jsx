import { useState } from 'react'
import Searchbar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import Spotify from './components/spotify'
import './App.css'

function App() {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  async function handleSearch(query) {
    const tracks = await Spotify.search(query);
    if (tracks) {
      setResults(tracks);
    }
  }

  function handleAdd(track) {
    setPlaylist(prev => [...prev, track]);
  }

  function handleRemove(track) {
    setPlaylist(prev => prev.filter(t => t.id !== track.id));
  }

  async function handleSave(name, uris) {
    await Spotify.savePlaylist(name, uris);
    setPlaylist([]);
  }


  return (
    <>
      <header className="header">
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <div className="hero">
        <Searchbar onSearch={handleSearch} />
      </div>
      <div className="boards">
        <SearchResults results={results} onAdd={handleAdd} />
        <Playlist tracks={playlist} onRemove={handleRemove} onSave={handleSave} />
      </div>
    </>
  )
}

export default App;
