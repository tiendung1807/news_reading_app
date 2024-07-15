import React from 'react';
import '../CSS/HomeBody.css';

const HomeBody: React.FC = () => {
    return (
        <div className="home-body">
            <section className="intro">
                <h1>Welcome to Thể Thao 247</h1>
                <p>Your ultimate destination for sports news and updates.</p>
            </section>
            <section className="featured-articles">
                <h2>Featured Articles</h2>
                <div className="articles-container">
                    <article className="article">
                        <h3>Article Title 1</h3>
                        <p>Brief description of the article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </article>
                    <article className="article">
                        <h3>Article Title 2</h3>
                        <p>Brief description of the article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </article>
                    <article className="article">
                        <h3>Article Title 3</h3>
                        <p>Brief description of the article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </article>
                </div>
            </section>
            <section className="latest-news">
                <h2>Latest News</h2>
                <ul className="news-list">
                    <li className="news-item">News item 1</li>
                    <li className="news-item">News item 2</li>
                    <li className="news-item">News item 3</li>
                </ul>
            </section>
        </div>
    );
};

export default HomeBody;
