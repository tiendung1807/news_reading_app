import React, { useState, useEffect } from 'react';
import './App.css';
import Parser from 'rss-parser';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'; // Sử dụng proxy để tránh vấn đề CORS
const RSS_FEED_URL = 'https://thethao247.vn/rss.html'; // URL của RSS feed từ Thể thao 247

const Header = () => {
    return (
        <header className="App-header">
            <h1>The thao 247</h1>
        </header>
    );
};

const Article = ({ article }) => {
    return (
        <div key={article.guid} className="article">
            <h2>{article.title}</h2>
            <p>{article.contentSnippet}</p>
            <a href={article.link}>Read more</a>
        </div>
    );
};

const ArticleList = ({ articles }) => {
    return <div className="articles">{articles.map((article) => <Article article={article} />)}</div>;
};

const App = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    const fetchRss = async () => {
        try {
            const parser = new Parser();
            const feed = await parser.parseURL(CORS_PROXY + RSS_FEED_URL);
            setArticles(feed.items);
            setError(null);
        } catch (error) {
            console.error('Failed to fetch RSS feed:', error);
            setError('Failed to fetch RSS feed');
        }
    };

    useEffect(() => {
        fetchRss();
    }, []);

    return (
        <div className="App">
            <Header />

            <button onClick={fetchRss}>Load Articles</button>

            {error && <p className="error">{error}</p>}

            <ArticleList articles={articles} />
        </div>
    );
};

export default App;