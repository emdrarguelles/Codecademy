export default function Track({ track, onAdd, onRemove, isPlaylist }) {
    function handleClick() {
        isPlaylist ? onRemove(track) : onAdd(track)
    }

    return (
        <>
            <p>{track?.name}</p>
            <button onClick={handleClick}>{isPlaylist ? '-' : '+'}</button>
        </>
    )
}