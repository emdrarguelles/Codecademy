import Tracklist from './Tracklist'

export default function SearchResults({ results, onAdd }) {

    return (
        <>
            <h1>Results</h1>
            <Tracklist tracks={results} onAdd={onAdd} isPlaylist={false}/>
        </>
    )
}