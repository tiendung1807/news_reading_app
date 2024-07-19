import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import CategoryArticleBody from './Component/CategoryArticleBody';
import HomeBody from './Component/HomeBody';
import ArticleDetail from './Component/ArticleDetail';
import SearchResult from './Component/SearchResult';

const App: React.FC = () => {
    const [rssUrl, setRssUrl] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleCategoryChange = (newRssUrl: string) => {
        setRssUrl(newRssUrl);
    };

    const handleHomeClick = () => {
        setRssUrl('');
    };

    return (
        <Router>
            <div>
                <Header
                    onCategoryChange={handleCategoryChange}
                    onHomeClick={handleHomeClick}
                    onSearch={(keyword) => setSearchKeyword(keyword)} // Add a callback to handle search
                />
                <Routes>
                    <Route path="/" element={<HomeBody />} />
                    <Route path="/category" element={<CategoryArticleBody key={rssUrl} rssUrl={rssUrl} />} />
                    <Route path="/article/:link" element={<ArticleDetail />} />
                    <Route path="/search" element={<SearchResult rssUrl={rssUrl} searchKeyword={searchKeyword} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
