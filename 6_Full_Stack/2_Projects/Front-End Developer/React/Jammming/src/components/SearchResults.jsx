import Tracklist from './Tracklist'

export default function SearchResults({ results, onAdd, onClearResults }) {

    return (
        <div className="panel">
            <h1>Results</h1>
            <button className="clear-button" onClick={onClearResults}>Clear Results</button>
            <Tracklist tracks={results} onAdd={onAdd} isPlaylist={false}/>
        </div>
    )
}