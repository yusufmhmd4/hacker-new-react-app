import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import ReactLoader from "../ReactLoader"
import Header from "../Header";

import NewsItem from "../NewsItem"

import "./index.css";

const Home = () => {
    const [searchInput, changeSearchInput] = useState("");
    const [isLoading, updateIsLoading] = useState(false)
    const [results, setResults] = useState([]);
    const fetchDetails = async () => {
        updateIsLoading(true)
        const URL = `https://hn.algolia.com/api/v1/search?query=${searchInput}`;
        const response = await fetch(URL);
        const data = await response.json();
        // console.log(data)
        updateIsLoading(false)
        setResults(data.hits);
    };
    useEffect(() => {
        fetchDetails();
    }, [searchInput]);

    const handleSearch = () => {
        fetchDetails();
    };
    
    return (
        <div className="app-container">
           <Header/>
            <div className="search-container">
                <input
                    type="search"
                    value={searchInput}
                    onChange={(e) => changeSearchInput(e.target.value)}
                    placeholder="Enter search query"
                />
                <button onClick={handleSearch} className="button">
                    <CiSearch />
                </button>
            </div>

            <div>
                <h2>Search Results</h2>
                {
                    isLoading ? <ReactLoader /> : <ul className="news-items-container">
                        {results.map((item) => (
                            <NewsItem key={item.objectID} item={item} />
                        ))}
                    </ul>
                }
            </div>
        </div>
    );
};

export default Home;
