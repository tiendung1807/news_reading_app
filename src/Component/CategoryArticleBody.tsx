import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../SCSS/CategoryArticleBody.scss';
import SortComponent from './SortComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

interface RssChannel {
    title: string;
}

interface RssItem {
    title: string;
    link: string;
    description: string;
    imgUrl: string;
    textContent: string;
    pubDate: string;
}

interface CategoryArticleBodyProps {
    rssUrl: string;
}

const CategoryArticleBody: React.FC<CategoryArticleBodyProps> = ({ rssUrl }) => {
    const [rssChannel, setRssChannel] = useState<RssChannel | null>(null);
    const [rssItems, setRssItems] = useState<RssItem[]>([]);
    const [visibleItemsCount, setVisibleItemsCount] = useState(10);
    const [sortOrder, setSortOrder] = useState<string>('desc');
    const [sortKey, setSortKey] = useState<string>('pubDate');


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
                const channel = xml.querySelector('channel');
                const items = xml.querySelectorAll('item');

                if (channel) {
                    setRssChannel({
                        title: channel.querySelector('title')?.textContent || ''
                    });
                }

                const rssItemsArray: RssItem[] = Array.from(items, (item) => {
                    const description = item.querySelector('description')?.textContent || '';
                    const imgUrl = extractImageUrlFromDescription(description);
                    const textContent = extractTextContentFromDescription(description);
                    console.log(item.querySelector('link')?.textContent);
                    const link1 = item.querySelector('link')?.textContent?.slice(22);

                    return {
                        title: item.querySelector('title')?.textContent || '',
                        link: link1 || '',

                        description,
                        imgUrl,
                        textContent,
                        pubDate: item.querySelector('pubDate')?.textContent || ''
                    };
                });

                setRssItems(rssItemsArray);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu RSS:', error);
            }
        };

        fetchData();
    }, [rssUrl]);

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

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString(); // Format the date and time
    };

    const handleLoadMore = () => {
        setVisibleItemsCount(prevCount => prevCount + 3);
    };

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

    return (
        <main>
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/" title="Trang chủ">Trang chủ</Link>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <span className="active" title="Bóng đá Việt Nam">{rssChannel?.title}</span>
                </div>
                <SortComponent setSortKey={setSortKey} setSortOrder={setSortOrder} />
                {sortedItems.length > 0 && (
                    <div className="cover">
                        <Link to={`/article/${encodeURIComponent(sortedItems[0].link)}`} className="thumb"
                              title={sortedItems[0].title}>
                            <img
                                src={sortedItems[0].imgUrl}
                                width="540"
                                height="358"
                                alt={sortedItems[0].title}
                            />
                        </Link>
                        <div className="text">
                            <Link to={`/article/${encodeURIComponent(sortedItems[0].link)}`} className="title"
                                  title={sortedItems[0].title}>
                                {sortedItems[0].title}
                            </Link>
                            <p className="sapo" dangerouslySetInnerHTML={{ __html: sortedItems[0].textContent }} />
                            <p className="pubDate">{formatDate(sortedItems[0].pubDate)}</p>
                        </div>
                    </div>
                )}
                <ul className="list-news">
                    {sortedItems.slice(1, 4).map((item, index) => (
                        <li key={index}>
                            <Link to={`/article/${encodeURIComponent(item.link)}`} className="thumb" title={item.title}>
                                <img
                                    src={item.imgUrl}
                                    width="400"
                                    height="264"
                                    alt={item.title}
                                />
                            </Link>
                            <h2 className="title">
                                <Link to={`/article/${encodeURIComponent(item.link)}`}
                                      title={item.title}>{item.title}</Link>
                            </h2>
                            <p className="pubDate">{formatDate(item.pubDate)}</p>
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
                            <Link to={`/article/${encodeURIComponent(item.link)}`} className="thumb" title={item.title}>
                                <img
                                    src={item.imgUrl}
                                    width="392"
                                    height="250"
                                    alt={item.title}
                                />
                            </Link>
                            <div className="text">
                                <h3>
                                    <Link to={`/article/${encodeURIComponent(item.link)}`} className="title"
                                          title={item.title}>{item.title}</Link>
                                </h3>
                                <p className="sapo" dangerouslySetInnerHTML={{ __html: item.textContent }} />
                                <p className="pubDate">{formatDate(item.pubDate)}</p>
                                <div className="read-more">
                                    <Link to={`/article/${encodeURIComponent(item.link)}`} className="btn_readMore"
                                          title="Read More">Đọc thêm</Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                {visibleItemsCount < sortedItems.length && (
                    <button id="loadMoreNews" className="btn_loadMore" onClick={handleLoadMore}>Xem thêm</button>
                )}
            </div>
        </main>
    );
};

export default CategoryArticleBody;
