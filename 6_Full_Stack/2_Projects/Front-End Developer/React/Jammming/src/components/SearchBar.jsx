import { useState } from 'react'

export default function SearchBar({ onSearch }) {
    const [title, setTitle] = useState('')

    function handleChange({target}) {
        setTitle(target.value);
    }

    function handleClick() {
        onSearch(title)
    }

    return (
        <>
            <input type='text' placeholder='Enter A Song Title' value={title} onChange={handleChange} className="search-input" />
            <button onClick={handleClick} className="search-button">SEARCH</button>
        </>
    )

}