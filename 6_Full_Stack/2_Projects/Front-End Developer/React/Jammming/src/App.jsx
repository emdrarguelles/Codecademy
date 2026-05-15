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
      { id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', uri: 'spotify:track:1' },
      { id: '2', name: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', uri: 'spotify:track:2' },
      { id: '3', name: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', uri: 'spotify:track:3' },
    ]);
  }

  function handleAdd(track) {
    setPlaylist(prev => [...prev, track]);
  }

  function handleRemove(track) {
    setPlaylist(prev => prev.filter(t => t.id !== track.id));
  }

  function handleSave(name, uris) {
    console.log('Playlist name:', name);
    console.log('URIs:', uris);
    setPlaylist([])
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
