import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsItem = () => {
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-md shadow-md p-4">
            <img src={article.urlToImage} alt={article.title} className="w-full h-32 object-cover mb-2 rounded-md" />
            <h2 className="text-lg font-bold">{article.title}</h2>
            <p className="text-gray-700">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsItem;
