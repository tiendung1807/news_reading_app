import React, {useState} from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import CategoryArticleBody from "./Component/CategoryArticleBody";
import RSSFeed from './Component/RSSFeed';

const App: React.FC = () => {
    const [rssUrl, setRssUrl] = useState("https://thethao247.vn/bong-da-viet-nam-c1.rss")
const handleCategoryChange = (newRssUrl: string) => {
    setRssUrl(newRssUrl);
}
return (
    <div>
        <Header onCategoryChange={handleCategoryChange}/>
        <CategoryArticleBody rssUrl={rssUrl}/>
        <Footer/>
    </div>
);
};

export default App;
