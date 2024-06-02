import React, { useState, useEffect } from 'react';
import './App.css';
import Parser from 'rss-parser';

function App() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchRss();
    }, []);

    const fetchRss = async () => {
        try {
            const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'; // Sử dụng proxy để tránh vấn đề CORS
            const RSS_FEED_URL = 'https://thethao247.vn/rss.html'; // URL của RSS feed từ Thể thao 247

            const parser = new Parser();
            const feed = await parser.parseURL(CORS_PROXY + RSS_FEED_URL);

            setArticles(feed.items);
        } catch (error) {
            console.error('Failed to fetch RSS feed:', error);
        }
    };

    const renderArticles = () => {
        return articles.map((article) => (
            <div key={article.guid} className="article">
                <h2>{article.title}</h2>
                <p>{article.contentSnippet}</p>
                <a href={article.link}>Read more</a>
            </div>
        ));
    };


  return (
      <div className="App">
        <header className="App-header">
          <h1>The thao 247</h1>
        </header>

        <button onClick={fetchArticles}>Load Articles</button>

        <div className="articles">{renderArticles()}</div>
      </div>
  );
}

export default App;
