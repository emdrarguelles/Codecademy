import { useState, useEffect } from 'react'
import Searchbar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import Spotify from './components/spotify'
import LocalPlaylist from './components/LocalPlaylist'
import './App.css'

function App() {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [localPlaylist, setLocalPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('jammming_playlists');
    if (saved) {
        setLocalPlaylist(JSON.parse(saved));
    }

    // wait for token then run pending search
    Spotify.getAccessToken().then(() => {
        setIsReady(true);
    });
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const pending = localStorage.getItem('pending_search');
    if (pending) {
        localStorage.removeItem('pending_search');
        handleSearch(pending);
    }
  }, [isReady]);

  function handleSaveLocal(name, tracks) {
    const newPlaylist = { id: Date.now(), name,  tracks};
    const updated = [...localPlaylist, newPlaylist];
    setLocalPlaylist(updated);
    localStorage.setItem('jammming_playlists', JSON.stringify(updated));
    setPlaylist([])
  }

  function handleLoadLocal(playlist) {
    setPlaylist(playlist.tracks);
    setPlaylistName(playlist.name);
  }

  function handleDeleteLocal(id) {
    const updated = localPlaylist.filter(p => p.id !== id);
    setLocalPlaylist(updated);
    localStorage.setItem('jammming_playlists', JSON.stringify(updated));
  }

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

  function handleClear() {
    setPlaylist([]);
    setPlaylistName('');
  }

  function handleClearResults() {
    setResults([]);

  }


  return (
    <>
      <header className="header">
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <div style={{ backgroundImage: 'url("/background.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Searchbar onSearch={handleSearch} />
      </div>
      <div className="boards">
        <SearchResults results={results} onAdd={handleAdd} onClearResults={handleClearResults} />
        <Playlist tracks={playlist} onRemove={handleRemove} onSave={handleSave} onSaveLocal={handleSaveLocal} onClear={handleClear} playlistName={playlistName} onNameChange={setPlaylistName} />
      </div>
      <div className="boards">
        <LocalPlaylist localPlaylist={localPlaylist} onLoad={handleLoadLocal} onDelete={handleDeleteLocal} />
      </div>
    </>
  )
}

export default App;
