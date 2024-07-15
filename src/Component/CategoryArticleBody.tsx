import React, { useState, useEffect } from 'react';
import '../CSS/CategoryArticleBody.css';
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
    aHref: string;
    imgUrl: string;
    textContent: string;
    pubDate: string;
}

interface CategoryArticleBodyProps {
    rssUrl: string;
}

const extractImageUrlFromDescription = (description: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : '';
};

const extractLinkUrlFromDescription = (description: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, 'text/html');
    const a = doc.querySelector('a');
    return a ? a.href : '';
};

const extractTextContentFromDescription = (description: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, 'text/html');
    return doc.body.textContent || '';
};

const CategoryArticleBody: React.FC<CategoryArticleBodyProps> = ({ rssUrl }) => {
    const [rssChannel, setRssChannel] = useState<RssChannel | null>(null);
    const [rssItems, setRssItems] = useState<RssItem[]>([]);
    const [visibleItemsCount, setVisibleItemsCount] = useState(10);

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
                    const aHref = extractLinkUrlFromDescription(description);
                    const imgUrl = extractImageUrlFromDescription(description);
                    const textContent = extractTextContentFromDescription(description);
                    return {
                        title: item.querySelector('title')?.textContent || '',
                        link: item.querySelector('link')?.textContent || '',
                        description,
                        aHref,
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

    useEffect(() => {
        setVisibleItemsCount(10);
    }, [rssUrl]);


    const handleLoadMore = () => {
        setVisibleItemsCount(prevCount => prevCount + 3);
    };

    return (
        <main>
            <div className="container">
                <div className="breadcrumb">
                    <a href="https://thethao247.vn" title="Trang chủ">Trang chủ</a>
                    <FontAwesomeIcon icon={faAngleRight}/>
                    <span className="active" title="Bóng đá Việt Nam">{rssChannel?.title}</span>
                </div>
                <div className="content">
                    <h1 className="big_title">{rssChannel?.title}</h1>
                    {rssItems.length > 0 && (
                        <div className="cover">
                            <a href={rssItems[0].link} className="thumb" title={rssItems[0].title}>
                                <img
                                    src={rssItems[0].imgUrl}
                                    width="540"
                                    height="358"
                                    alt={rssItems[0].title}
                                />
                            </a>
                            <div className="text">
                                <a href={rssItems[0].link} className="title" title={rssItems[0].title}>
                                    {rssItems[0].title}
                                </a>
                                <p className="sapo" dangerouslySetInnerHTML={{ __html: rssItems[0].textContent }}/>
                            </div>
                        </div>
                    )}
                    <ul className="list-news">
                        {rssItems.slice(1, 4).map((item, index) => (
                            <li key={index}>
                                <a href={item.link} className="thumb" title={item.title}>
                                    <img
                                        src={item.imgUrl}
                                        width="400"
                                        height="264"
                                        alt={item.title}
                                    />
                                </a>
                                <h2 className="title">
                                    <a href={item.link} title={item.title}>{item.title}</a>
                                </h2>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="caption">
                    <h2>
                        <span className="title" title="Bóng đá Việt Nam mới nhất">
                            <span>Mới nhất</span>
                        </span>
                    </h2>
                </div>
                <ul id="box_latest_more" className="box_latest_more">
                    {rssItems.slice(4, visibleItemsCount).map((item, index) => (
                        <li key={index}>
                            <a href={item.link} className="thumb" title={item.title}>
                                <img
                                    src={item.imgUrl}
                                    width="392"
                                    height="250"
                                    alt={item.title}
                                />
                            </a>
                            <div className="text">
                                <h3>
                                    <a href={item.link} className="title" title={item.title}>{item.title}</a>
                                </h3>
                                <p className="sapo" dangerouslySetInnerHTML={{ __html: item.textContent }}/>
                            </div>
                        </li>
                    ))}
                </ul>
                {visibleItemsCount < rssItems.length && (
                    <button id="loadMoreNews" className="btn_loadMore" onClick={handleLoadMore}>Xem thêm</button>
                )}
            </div>
        </main>
    );
};

export default CategoryArticleBody;
