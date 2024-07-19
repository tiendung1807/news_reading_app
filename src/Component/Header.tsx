import React ,{ useState }from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../SCSS/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    onCategoryChange: (rssUrl: string) => void;
    onHomeClick: () => void;
    onSearch: (keyword: string) => void; // Add a new prop for search callback

}

const Header: React.FC<HeaderProps> = ({ onCategoryChange, onHomeClick, onSearch    }) => {
    const BDVN = [
        { name: 'Bóng đá việt nam', url: 'https://thethao247.vn/bong-da-viet-nam-c1.rss' },
        { name: 'V-League', url: 'https://thethao247.vn/v-league-c15.rss' },
        { name: 'Đội tuyển Quốc gia', url: 'https://thethao247.vn/tuyen-quoc-gia-vn-c19.rss' },
        { name: 'Bóng Đá Nữ', url: 'https://thethao247.vn/bong-da-nu-viet-nam-c20.rss' },
        { name: 'Bóng đá trẻ', url: 'https://thethao247.vn/bong-da-c210.rss' },
        { name: 'U23 Châu Á', url: 'https://thethao247.vn/u23-chau-a-c281.rss' },
    ];
    const BDQT = [
        { name: 'Bóng đá quốc tế', url: 'https://thethao247.vn/bong-da-quoc-te-c2.rss' },
        { name: 'Bóng đá Anh', url: 'https://thethao247.vn/bong-da-anh-c8.rss' },
        { name: 'Bóng đá Tây Ban Nha - La Liga', url: 'https://thethao247.vn/bong-da-tbn-c9.rss' },
        { name: 'Bóng đá Ý - Serie A', url: 'https://thethao247.vn/bong-da-y-c10.rss' }
    ];
    const CN = { name: "Chuyển nhượng", url: 'https://thethao247.vn/tin-chuyen-nhuong-c14.rss' };
    const TT = [
        { name: 'Thể thao', url: 'https://thethao247.vn/the-thao-tong-hop-c5.rss' },
        { name: 'Bóng chuyền', url: 'https://thethao247.vn/bong-chuyen-c45.rss' },
        { name: 'Bóng rỗ', url: 'https://thethao247.vn/bong-ro-c43.rss' },
        { name: 'Võ thuật', url: 'https://thethao247.vn/vo-thuat-c228.rss' },
        { name: 'Tennis', url: 'https://thethao247.vn/quan-vot-tennis-c4.rss' }
    ];
    const esports = [
        { name: 'Esports', url: 'https://thethao247.vn/esports-c180.rss' },
        { name: 'LMHT', url: 'https://thethao247.vn/lien-minh-huyen-thoai-c181.rss' },
        { name: 'Valorant', url: 'https://thethao247.vn/valorant-c305.rss' },
        { name: 'Genshin Impact', url: 'https://thethao247.vn/genshin-impact-c306.rss' }
    ];
    const xe = [
        { name: 'Xe', url: 'https://thethao247.vn/xe-co-c191.rss' },
        { name: 'Đua xe', url: 'https://thethao247.vn/dua-xe-c96.rss' },
        { name: 'Bảng giá xe', url: 'https://thethao247.vn/bang-gia-xe-c202.rss' },
    ];

    const KD = { name: 'Khỏe & đẹp', url: 'https://thethao247.vn/list-c261.rss' };

    const [searchKeyword, setSearchKeyword] = useState("");
    const navigate = useNavigate(); // Use useNavigate here

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(searchKeyword); // Call the parent component's handler
        navigate('/search'); // Navigate to search results page
    };

    const handleCategoryClick = (url: string) => {
        onCategoryChange(url);
    };

    return (
        <header id="header">
            <div className="header-top">
                <div className="container">
                    <div className="logo-relative">
                        <Link to="/" title="Thể Thao 247">
                            <img
                                src="https://thethao247.vn/frontend/images/logo.svg?1"
                                alt="Thể thao 247"
                                width="150"
                                height="150"
                            />
                        </Link>
                    </div>
                    <div className="logo-event">
                        <Link to="/" title="Euro 2024">
                            <img
                                src="https://cdn-img.thethao247.vn/storage/files/SyNguyen/2024/03/22/65fd01def2692.png"
                                alt="Euro 2024"
                                width="127"
                                height="35"
                            />
                        </Link>
                    </div>
                </div>
                <nav className="navigation">
                    <div className="main-nav">
                        <div className="container">
                            <ul className="nav-content">
                                <li>
                                    <Link to="/" title="Trang chủ thể thao 247" className="home-icon"
                                          onClick={onHomeClick}>
                                        <FontAwesomeIcon icon={faHome} aria-hidden="true"/>
                                    </Link>
                                </li>
                                <li key={BDVN[0].name}>
                                    <Link to="/category" onClick={() => handleCategoryClick(BDVN[0].url)}>
                                        {BDVN[0].name}
                                    </Link>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                {BDVN.slice(1).map(category => (
                                                    <Link to="/category"
                                                          key={category.name}
                                                          onClick={() => handleCategoryClick(category.url)}>
                                                        {category.name}
                                                    </Link>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li key={BDQT[0].name}>
                                    <Link to="/category" onClick={() => handleCategoryClick(BDQT[0].url)}>
                                        {BDQT[0].name}
                                    </Link>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                {BDQT.slice(1).map(category => (
                                                    <Link to="/category"
                                                          key={category.name}
                                                          onClick={() => handleCategoryClick(category.url)}>
                                                        {category.name}
                                                    </Link>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li key={CN.name}>
                                    <Link to="/category" onClick={() => handleCategoryClick(CN.url)}>
                                        {CN.name}
                                    </Link>
                                </li>
                                <li key={TT[0].name}>
                                    <Link to="/category" onClick={() => handleCategoryClick(TT[0].url)}>
                                        {TT[0].name}
                                    </Link>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                {TT.slice(1).map(category => (
                                                    <Link to="/category"
                                                          key={category.name}
                                                          onClick={() => handleCategoryClick(category.url)}>
                                                        {category.name}
                                                    </Link>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li key={esports[0].name}>
                                    <Link to="/category" onClick={() => handleCategoryClick(esports[0].url)}>
                                        {esports[0].name}
                                    </Link>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                {esports.slice(1).map(category => (
                                                    <Link to="/category"
                                                          key={category.name}
                                                          onClick={() => handleCategoryClick(category.url)}>
                                                        {category.name}
                                                    </Link>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li key={xe[0].name}>
                                    <Link to="/category" onClick={() => handleCategoryClick(xe[0].url)}>
                                        {xe[0].name}
                                    </Link>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                {xe.slice(1).map(category => (
                                                    <Link to="/category"
                                                          key={category.name}
                                                          onClick={() => handleCategoryClick(category.url)}>
                                                        {category.name}
                                                    </Link>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li key={KD.name}>
                                    <Link to="/category" onClick={() => handleCategoryClick(KD.url)}>
                                        {KD.name}
                                    </Link>
                                </li>
                            </ul>
                            <div className="topsearch">
                                <form onSubmit={handleSearchSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Tìm kiếm..."
                                        value={searchKeyword}
                                        onChange={(e) => setSearchKeyword(e.target.value)}
                                        className="search-input"
                                    />
                                    <button type="submit" className="search-button">
                                        <FontAwesomeIcon icon={faSearch} aria-hidden="true"/>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
