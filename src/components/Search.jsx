import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useResultContext } from '../contexts/ResultContextProvider'
import Links from './Links';

const Search = () => {
    const [text, setText] = useState('Dr Israr Ahmed')
    const { setSearchTerm } = useResultContext();
    const [debouncedValue] = useDebounce(text, 300);

    useEffect(() => {
        if (debouncedValue) setSearchTerm(debouncedValue)
    }, [debouncedValue])

    return (
        <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
            <input
                type="text"
                value={text}
                className="sm:96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
                placeholder="Search Goggl or Type URL"
                onChange={ (e) => setText(e.target.value) }
            />
            { text && (
                <button type="button" onClick={ () => setText('') } className="absolute top-2.5 right-4 text-2xl text-gray-500">
                    X
                </button>
            )}
            <Links />
        </div>
    )
}

export default Search
