import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  // Phương thức để tải danh sách bài viết từ API hoặc nguồn dữ liệu khác
  const fetchArticles = async () => {
    try {
      // Gọi API hoặc thực hiện các tác vụ để lấy danh sách bài viết
      const response = await fetch('https://example.com/api/articles');
      const data = await response.json();

      // Cập nhật danh sách bài viết
      setArticles(data);
    } catch (error) {
      console.error('Failed to fetch articles:', error);
    }
  };

  // Phương thức để hiển thị danh sách bài viết
  const renderArticles = () => {
    return articles.map((article) => (
        <div key={article.id} className="article">
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
    ));
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>News App</h1>
        </header>

        <button onClick={fetchArticles}>Load Articles</button>

        <div className="articles">{renderArticles()}</div>
      </div>
  );
}

export default App;
