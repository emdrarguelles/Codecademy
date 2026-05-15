import { useState } from 'react'
import Tracklist from './Tracklist'

export default function Playlist({ tracks, onRemove }) {
    const [listName, setListName] = useState('')

    function handleChange({ target }) {
        setListName(target.value);
    }

    function handleClick({target}) {

    }

    return (
        <div className="panel">
            <input type='text' placeholder='Playlist Name' onChange={handleChange} value={listName} />
            <Tracklist tracks={tracks} onRemove={onRemove} isPlaylist={true} />
            <button className="save-button">Save to Spotify</button>
        </div>
    )
}