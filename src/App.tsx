import React from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
// import CategoryArticleBody from "./Component/CategoryArticleBody";
import RSSFeed from './Component/RSSFeed';

const App: React.FC = () => {
    const rssUrl = 'https://thethao247.vn/trang-chu.rss';
    return (
        <>
            <Header/>
            <RSSFeed />
            <Footer/>
        </>
    );
};

export default App;