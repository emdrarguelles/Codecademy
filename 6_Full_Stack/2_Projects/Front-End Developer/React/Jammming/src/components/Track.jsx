export default function Track({ track, onAdd, onRemove, isPlaylist }) {
    function handleClick() {
        isPlaylist ? onRemove(track) : onAdd(track)
    }

    return (
        <>
            <p>
                {track?.name} <br/>
                {track?.artist} | {track?.album}

            </p>
            <button onClick={handleClick}>{isPlaylist ? '-' : '+'}</button>
        </>
    )
}