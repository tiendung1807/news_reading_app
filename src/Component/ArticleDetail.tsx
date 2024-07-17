import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../CSS/ArticleDetail.module.css';

interface ArticleDetailProps {}

const ArticleDetail: React.FC<ArticleDetailProps> = () => {
    const { link } = useParams<{ link: string }>();
    const [article, setArticle] = useState<{
        title: string;
        description: string;
        content: string;
        pubDate: string;
        relatedArticles: { title: string; link: string }[];
    } | null>(null);

    useEffect(() => {
        if (!link) {
            console.error('Link is null or undefined');
            return;
        }

        const fetchArticleData = async () => {
            try {
                const decodedLink = decodeURIComponent(link);
                const response = await fetch(`https://cors-anywhere.herokuapp.com/${decodedLink}`);
                if (!response.ok) {
                    throw new Error('Không thể tải dữ liệu bài viết');
                }
                const text = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'text/html');

                const title = doc.querySelector('title')?.textContent || '';
                const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
                const pubDate = doc.querySelector('meta[property="article:published_time"]')?.getAttribute('content') || '';

                // Assuming the main content is in an element with class "main-content"
                const contentElement = doc.querySelector('.main-content');
                const content = contentElement ? contentElement.innerHTML : '';

                const relatedArticles: { title: string; link: string }[] = [];
                doc.querySelectorAll('a.related-article-link').forEach((a) => {
                    relatedArticles.push({
                        title: a.textContent || '',
                        link: a.getAttribute('href') || '',
                    });
                });

                setArticle({ title, description, content, pubDate, relatedArticles });
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu bài viết:', error);
            }
        };

        fetchArticleData();
    }, [link]);

    if (!article) {
        return <div>Đang tải dữ liệu bài viết...</div>;
    }

    return (
        <div className={styles.articleDetail}>
            <h1>{article.title}</h1>
            <p>{new Date(article.pubDate).toLocaleDateString()}</p>
            <p>{article.description}</p>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
            <h2>Bài viết liên quan</h2>
            <ul>
                {article.relatedArticles.map((related, index) => (
                    <li key={index}>
                        <Link to={`/article/${encodeURIComponent(related.link)}`}>{related.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleDetail;
