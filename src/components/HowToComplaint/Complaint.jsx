import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Complaint() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: 'cybercrime India',
          apiKey: '4efdebe50d6a47c3921bfb6d5ffa3ffe'
        }
      });
      setArticles(response.data.articles);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>News about Cybercrime in India</h1>
      <ul>
        {articles.map(article => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Complaint;
