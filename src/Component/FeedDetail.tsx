import React, { useEffect, useState } from 'react';

interface FeedDetailProps {
    link: string;
    onClose: () => void;
}
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const FeedDetail: React.FC<FeedDetailProps> = ({ link, onClose }) => {
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`${CORS_PROXY}${link}`, {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                        'Origin': 'http://localhost:3000',
                        'Access-Control-Request-Method': 'GET',
                        "X-Requested-With": "XMLHttpRequest",
                    },
                });
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error fetching the feed content:', error);
            }
        };

        fetchContent();
    }, [link]);

    return (
        <div className="feed-detail">
            <button onClick={onClose}>Close</button>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default FeedDetail;
