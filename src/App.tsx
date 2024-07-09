import React from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import CategoryArticleBody from "./Component/CategoryArticleBody";
import RSSFeed from './Component/RSSFeed';

const App: React.FC = () => {
    return (
        <div>
            <Header/>
            <CategoryArticleBody/>
            <Footer/>
        </div>
    );
};

export default App;
