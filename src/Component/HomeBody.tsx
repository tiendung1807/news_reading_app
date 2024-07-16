import React, { useState, useEffect } from 'react';
import '../CSS/RSSFeed.css';
import SortComponent from './SortComponent';
import FeedDetail from './FeedDetail';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

interface RssItem {
    title: string;
    link: string;
    description: string;
    pubDate: string;
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    };
    return new Intl.DateTimeFormat('vi', options).format(date);
};

const parseRSSItems = (xml: Document): RssItem[] => {
    const items = xml.querySelectorAll('item');
    return Array.from(items, (item) => ({
        title: item.querySelector('title')?.textContent || '',
        link: item.querySelector('link')?.textContent || '',
        description: item.querySelector('description')?.textContent || '',
        pubDate: item.querySelector('pubDate')?.textContent || '',
    }));
};

const RSSFeed: React.FC = () => {
    const [visibleItemsCount, setVisibleItemsCount] = useState(10);
    const [rssItems, setRssItems] = useState<RssItem[]>([]);
    const [sortKey, setSortKey] = useState<string>('pubDate');
    const [sortOrder, setSortOrder] = useState<string>('asc');
    const [selectedLink, setSelectedLink] = useState<string | null>(null);
    const rssUrl = 'https://thethao247.vn/trang-chu.rss';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${CORS_PROXY}${rssUrl}`);
                if (!response.ok) {
                    throw new Error('Không thể tải dữ liệu RSS');
                }
                const text = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, 'text/xml');
                const rssItemsArray = parseRSSItems(xml);
                setRssItems(rssItemsArray);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu RSS:', error);
            }
        };

        fetchData();
    }, [rssUrl]);

    const sortedItems = [...rssItems].sort((a, b) => {
        if (sortKey === 'pubDate') {
            return sortOrder === 'asc'
                ? new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime()
                : new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
        } else if (sortKey === 'title') {
            return sortOrder === 'asc'
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title);
        }
        return 0;
    });

    const handleLoadMore = () => {
        setVisibleItemsCount(prevCount => prevCount + 3);
    };

    const handleItemClick = (link: string) => {
        setSelectedLink(link);
    };

    const handleCloseDetail = () => {
        setSelectedLink(null);
    };

    return (
        <main>
            <div className="container">
                <SortComponent setSortKey={setSortKey} setSortOrder={setSortOrder} />
                {selectedLink ? (
                    <FeedDetail link={selectedLink} onClose={handleCloseDetail} />
                ) : (
                    <div className="content">
                        {sortedItems.length > 0 && (
                            <div className="cover">
                                <div className="text">
                                    <a href={sortedItems[0].link} className="title" title={sortedItems[0].title}>
                                        {sortedItems[0].title}
                                    </a>
                                    <p className="sapo" dangerouslySetInnerHTML={{__html: sortedItems[0].description}}/>
                                    <p className="date">{formatDate(rssItems[0].pubDate)}</p>
                                </div>
                            </div>
                        )}
                        <ul className="list-news">
                            {sortedItems.slice(1, 4).map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="thumb" title={item.title}
                                       onClick={() => handleItemClick(item.link)}>
                                        <div
                                            dangerouslySetInnerHTML={{__html: item.description.substring(item.description.indexOf("<img"), item.description.lastIndexOf("/>") + 3)}}/>
                                    </a>
                                    <h2 className="title">
                                        <a href={item.link} title={item.title}>{item.title}</a>
                                    </h2>
                                    <p className="date">{formatDate(item.pubDate)}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="caption">
                            <h2>
                                <span className="title" title="Bóng đá Việt Nam mới nhất">
                                    <span>Mới nhất</span>
                                </span>
                            </h2>
                        </div>
                        <ul id="box_latest_more" className="box_latest_more">
                            {sortedItems.slice(4, visibleItemsCount).map((item, index) => (
                                <li key={index}>
                                    <div className="text">
                                        <div className={"adjust-title-h3"}>
                                            <h3>
                                                <a href={item.link} className="title" title={item.title}
                                                   onClick={() => handleItemClick(item.link)}>{item.title}</a>
                                            </h3>

                                        </div>

                                        <p className="sapo" dangerouslySetInnerHTML={{__html: item.description}}/>
                                        <p className="date">{formatDate(item.pubDate)}</p>
                                        <div className={"load-more-news-detail"}>
                                            <a className="btn_loadMore-news-detail"
                                               onClick={() => handleItemClick(item.link)}>Xem thêm
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {visibleItemsCount < sortedItems.length && (
                            <div id="loadMoreNews">
                                <button  className="btn_loadMore" onClick={handleLoadMore}>Xem thêm
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
};

export default RSSFeed;
