import React from 'react'
import { Link } from "react-router-dom"

import "./index.css"

function NewsItem({ item }) {
    return (
        <Link to={`/items/${item.objectID}`} className='link-element'>
            <li className="news-item">
                <p>
                    <strong>Title:</strong> {item.title || `Unknown`}
                </p>
                <p>
                    <strong>Author:</strong>{" "}
                    {item.author}
                </p> 
            </li>
        </Link>
    )
}

export default NewsItem
