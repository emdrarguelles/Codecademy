import Tracklist from './Tracklist'

export default function Playlist({ tracks, onRemove }) {
    function handleClick({target}) {

    }

    return (
        <>
            <Tracklist tracks={tracks} onRemove={onRemove} isPlaylist={true} />
            <button onClick={handleClick}>Save to Spotify</button>
        </>
    )
}