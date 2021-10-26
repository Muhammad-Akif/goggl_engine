import React, { useState, createContext, useContext } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = (type) => {
        setIsLoading(true);
        
        const responce = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '98f3c504c3mshb9db758289c0347p1edf92jsnbfc053185ddd'
            }
        })
        const data = await responce.json()
        
        setResults(data)
        setIsLoading(false)
    }
    return(
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading}}>
            { children }
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);