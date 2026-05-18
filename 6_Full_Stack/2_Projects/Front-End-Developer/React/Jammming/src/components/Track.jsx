export default function Track({ track, index, onAdd, onRemove, isPlaylist }) {
    function handleClick() {
        isPlaylist ? onRemove(track) : onAdd(track)
    }

    return (
        <div className="track">
            <div className="track-info">
                <p>{index}. {track?.name}</p>
                <p>{track?.artist} | {track?.album}</p>
            </div>
            <button className="track-button" onClick={handleClick}>{isPlaylist ? '-' : '+'}</button>
        </div>
    )
}