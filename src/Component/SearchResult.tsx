import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../SCSS/SearchResult.scss';

interface RssItem {
    title: string;
    link: string;
    description: string;
    imgUrl: string;
    textContent: string;
    pubDate: string;
}

interface SearchResultProps {
    rssUrl: string;
    searchKeyword: string;
}

const SearchResult: React.FC<SearchResultProps> = ({rssUrl, searchKeyword}) => {
    const [rssItems, setRssItems] = useState<RssItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cors-anywhere.herokuapp.com/${rssUrl}`);
                const text = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, 'text/xml');
                const items = xml.querySelectorAll('item');


                const rssItemsArray: RssItem[] = Array.from(items, (item) => {
                    const description = item.querySelector('description')?.textContent || '';
                    const imgUrl = extractImageUrlFromDescription(description);
                    const textContent = extractTextContentFromDescription(description);
                    return {
                        title: item.querySelector('title')?.textContent || '',
                        link: item.querySelector('link')?.textContent || '',
                        description,
                        imgUrl,
                        textContent,
                        pubDate: item.querySelector('pubDate')?.textContent || ''
                    };
                });

                setRssItems(rssItemsArray.filter(item =>
                    item.title.toLowerCase().includes(searchKeyword.toLowerCase())
                ));
            } catch (error) {
                console.error('Error fetching RSS data:', error);
            }
        };

        if (rssUrl && searchKeyword) {
            fetchData();
        }
    }, [rssUrl, searchKeyword]);

    const extractImageUrlFromDescription = (description: string): string => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(description, 'text/html');
        const img = doc.querySelector('img');
        return img ? img.src : '';
    };
    const extractTextContentFromDescription = (description: string): string => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(description, 'text/html');
        return doc.body.textContent || '';
    };

    return (
        <main>
            <div className="container">
                <h1>Kết quả tìm kiếm cho: "{searchKeyword}"</h1>
                <ul className="search-results">
                    {rssItems.length > 0 ? (
                        rssItems.map((item, index) => (
                            <li key={index}>
                                <Link to={`/article/${encodeURIComponent(item.link)}`} className="thumb"
                                      title={item.title}>
                                    <img src={item.imgUrl} alt={item.title}/>
                                </Link>
                                <h2 className="title">
                                    <Link to={`/article/${encodeURIComponent(item.link)}`} title={item.title}>
                                        {item.title}
                                    </Link>
                                </h2>
                                <p className="pubDate">{item.pubDate}</p>
                            </li>
                        ))
                    ) : (
                        <p>Không có kết quả nào phù hợp.</p>
                    )}
                </ul>
            </div>
        </main>
    );
};

export default SearchResult;
