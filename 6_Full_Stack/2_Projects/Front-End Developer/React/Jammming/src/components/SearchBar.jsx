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
            <input type='text' placeholder='Enter A Song Title' value={title} onChange={handleChange} />
            <button onClick={handleClick}>SEARCH</button>
        </>
    )

}