import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoader from '../ReactLoader';

import './index.css';

function NewsItemDetails() {
  const { id } = useParams();
  const [newsItem, updateNewsItem] = useState({});
  const [isLoading, updateIsLoading] = useState(true);

  useEffect(() => {
    async function getNewsItem() {
      const URL = `https://hn.algolia.com/api/v1/items/${id}`;
      const response = await fetch(URL);
      const data = await response.json();
      const itemDetails = {
        title: data.title,
        points: data.points,
        childrens: data.children || [],
        url: data.url,
      };
      updateIsLoading(false);

      updateNewsItem(itemDetails);

    }
    getNewsItem();
  }, [id]);
  console.log(newsItem)
  return (
    <div className='news-item-details-container'>
      {isLoading ? (
        <ReactLoader />
      ) : (
        <div className='details-container'>
          <p>
            <strong>Title:</strong> {newsItem.title || `Unknown`}
          </p>
          <p>
            <strong>Points:</strong> {newsItem.points}
          </p>
          <button className='read-news-button'>
            <a href={newsItem.url} target='__blank' rel='noopener noreferrer'>
              Read News
            </a>
          </button>
          <div className='childrens'>
            <h4>Comments:</h4>
            <ul className='comments-list'>
  {newsItem.childrens.length === 0 ? (
    <p className='no-comments'>No Comments</p>
  ) : (
    newsItem.childrens.map((comment, index) => (
      <li className='comment-item' key={index} dangerouslySetInnerHTML={{ __html: comment.text }} />
    ))
  )}
</ul>
          </div>
        </div>
      )}

    </div>
  );
}

export default NewsItemDetails;
