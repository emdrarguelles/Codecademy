export default function LocalPlaylist({ localPlaylist, onLoad, onDelete }) {
    return (
        <div className="panel">
            <h1>Local Playlists</h1>
            {localPlaylist.map((playlist) => (
                <div key={playlist.id} className='track'>
                    <p>{playlist.name}</p>
                    <div>
                        <button className="save-button" onClick={() => onLoad(playlist)}>Load</button>
                        <button className="save-button" onClick={() => onDelete(playlist.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}