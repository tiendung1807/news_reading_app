import React, {useState} from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import CategoryArticleBody from "./Component/CategoryArticleBody";
import HomeBody from "./Component/HomeBody";

const App: React.FC = () => {
    const [currentComponent, setCurrentComponent] = useState<'home' | 'category'>('home');
    const [rssUrl, setRssUrl] = useState("https://thethao247.vn/bong-da-viet-nam-c1.rss")
    const handleCategoryChange = (newRssUrl: string) => {
        setRssUrl(newRssUrl);
        setCurrentComponent('category');
    }
    const handleHomeClick = () => {
        setCurrentComponent('home');
    };
    return (
        <div>
            <Header onCategoryChange={handleCategoryChange} onHomeClick={handleHomeClick}/>
            {currentComponent === 'home' ? <HomeBody /> : <CategoryArticleBody rssUrl={rssUrl} />}
            <Footer/>
        </div>
    );
};

export default App;

