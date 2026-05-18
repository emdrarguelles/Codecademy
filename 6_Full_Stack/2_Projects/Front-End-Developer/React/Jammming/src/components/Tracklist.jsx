import Track from './Track'

export default function Tracklist({ tracks, onAdd, onRemove, isPlaylist }) {
    return (
        <div className="tracklist">
            {tracks.map((track, index) => (
                <Track key={track.id} track={track} index={index + 1} onAdd={onAdd} onRemove={onRemove} isPlaylist={isPlaylist} />
            ))}
        </div>
    )
}