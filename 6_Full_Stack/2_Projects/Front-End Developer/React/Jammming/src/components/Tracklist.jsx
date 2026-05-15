import Track from './Track'

export default function Tracklist({ tracks, onAdd, onRemove, isPlaylist }) {
    return (
        <>
            {tracks.map((track) => (
                <Track key={track.id} track={track} onAdd={onAdd} onRemove={onRemove} isPlaylist={isPlaylist} />
            ))}
            
        </>
    )
}