import { useState } from 'react'
import Searchbar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import './App.css'

function App() {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  function handleSearch(query) {
    setResults([
      { id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera' },
      { id: '2', name: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours' },
      { id: '3', name: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia' },
    ]);
  }

  function handleAdd(track) {
    setPlaylist(prev => [...prev, track])
  }

  function handleRemove(track) {
    setPlaylist(prev => prev.filter(t => t.id !== track.id))
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
        <Playlist tracks={playlist} onRemove={handleRemove} />
      </div>
    </>
  )
}

export default App;
