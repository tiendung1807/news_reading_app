import React, { useState, useEffect } from 'react';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

interface RssItem {
    title: string;
    link: string;
    description: string;
    pubDate: string;
}

interface PageProps {
    url: string;
}

const RSSFeed: React.FC<PageProps> = ({ url }) => {
    const [rssItems, setRssItems] = useState<RssItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${CORS_PROXY}${url}`);
                if (!response.ok) {
                    throw new Error('Không thể tải dữ liệu RSS');
                }
                const text = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, 'text/xml');
                const items = xml.querySelectorAll('item');
                const rssItemsArray: RssItem[] = Array.from(items, (item) => ({
                    title: item.querySelector('title')?.textContent || '',
                    link: item.querySelector('link')?.textContent || '',
                    description: item.querySelector('description')?.textContent || '',
                    pubDate: item.querySelector('pubDate')?.textContent || '',
                }));
                setRssItems(rssItemsArray);
                setLoading(false);
            } catch (error) {
                setError((error as Error).message);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    if (loading) {
        return <p>Đang tải dữ liệu...</p>;
    }

    if (error) {
        return <p>Lỗi khi lấy dữ liệu RSS: {error}</p>;
    }

    return (
        <div>
            {rssItems.map((item, index) => (
                <div key={index}>
                    <h2>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>
                    </h2>
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                    <p>Ngày đăng: {item.pubDate}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default RSSFeed;
