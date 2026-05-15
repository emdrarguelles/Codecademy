import { useState } from 'react'
import Tracklist from './Tracklist'

export default function Playlist({ tracks, onRemove, onSave }) {
    const [listName, setListName] = useState('')

    function handleChange({ target }) {
        setListName(target.value);
    }

    function handleClick() {
        const uris = tracks.map((track) => track.uri)
        onSave(listName, uris)
        setListName('')
    }

    return (
        <div className="panel">
            <input type='text' placeholder='Playlist Name' onChange={handleChange} value={listName} />
            <Tracklist tracks={tracks} onRemove={onRemove} isPlaylist={true} />
            <button className="save-button" onClick={handleClick}>Save to Spotify</button>
        </div>
    )
}