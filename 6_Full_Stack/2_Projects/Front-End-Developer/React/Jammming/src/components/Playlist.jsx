import Tracklist from './Tracklist'

export default function Playlist({ tracks, onRemove, onSave, onSaveLocal, onClear, playlistName, onNameChange }) {
    function handleClick() {
        if (!playlistName || tracks.length === 0) return;
        const uris = tracks.map((track) => track.uri)
        onSave(playlistName, uris)
        onNameChange('')
    }

    function handleSaveLocalClick() {
        if (!playlistName || tracks.length === 0) return;
        onSaveLocal(playlistName, tracks)
        onNameChange('')
    }

    return (
        <div className="panel">
            <input type='text' placeholder='Playlist Name' onChange={(e) => onNameChange(e.target.value)} value={playlistName} />
            <Tracklist tracks={tracks} onRemove={onRemove} isPlaylist={true} />
            {tracks.length === 0 && <div style={{ marginBottom: '4rem' }} />}
            <div className="panel-footer">
                <div className="btn-box">
                    <button className="save-button" onClick={handleSaveLocalClick}>Save to Local</button>
                    <button className="save-button" onClick={handleClick}>Save to Spotify</button>
                </div>
                <button className="clear-button" onClick={onClear}>Clear Playlist</button>
            </div>
        </div>
    )
}