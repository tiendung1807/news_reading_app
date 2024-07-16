import React from 'react';
import '../CSS/Header.css';
import '../CSS/main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faSearch} from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    onCategoryChange: (rssUrl: string) => void;
    onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({onCategoryChange, onHomeClick}) => {
    const BDVN = [
        {name: 'Bóng đá việt nam', url: 'https://thethao247.vn/bong-da-viet-nam-c1.rss'},
        {name: 'V-League', url: 'https://thethao247.vn/v-league-c15.rss'},
        {name: 'Đội tuyển Quốc gia', url: 'https://thethao247.vn/tuyen-quoc-gia-vn-c19.rss'},
        {name: 'Bóng Đá Nữ', url: 'https://thethao247.vn/bong-da-nu-viet-nam-c20.rss'},
        {name: 'Bóng đá trẻ', url: 'https://thethao247.vn/bong-da-c210.rss'},
        {name: 'U23 Châu Á', url: 'https://thethao247.vn/u23-chau-a-c281.rss'},
    ];
    const BDQT = [
        {name: 'Bóng đá quốc tế', url: 'https://thethao247.vn/bong-da-quoc-te-c2.rss'},
        {name: 'Bóng đá Anh', url: 'https://thethao247.vn/bong-da-anh-c8.rss'},
        {name: 'Bóng đá Tây Ban Nha - La Liga', url: 'https://thethao247.vn/bong-da-tbn-c9.rss'},
        {name: 'Bóng đá Ý - Serie A', url: 'https://thethao247.vn/bong-da-y-c10.rss'}
    ];
    const CN = {name: "Chuyển nhượng", url: 'https://thethao247.vn/tin-chuyen-nhuong-c14.rss'};
    const TT = [
        {name: 'Thể thao', url: 'https://thethao247.vn/the-thao-tong-hop-c5.rss'},
        {name: 'Bóng chuyền', url: 'https://thethao247.vn/bong-chuyen-c45.rss'},
        {name: 'Bóng rỗ', url: 'https://thethao247.vn/bong-ro-c43.rss'},
        {name: 'Võ thuật', url: 'https://thethao247.vn/vo-thuat-c228.rss'},
        {name: 'Tennis', url: 'https://thethao247.vn/quan-vot-tennis-c4.rss'}
    ];
    const esports = [
        {name: 'Esports', url: 'https://thethao247.vn/esports-c180.rss'},
        {name: 'LMHT', url: 'https://thethao247.vn/lien-minh-huyen-thoai-c181.rss'},
        {name: 'Valorant', url: 'https://thethao247.vn/valorant-c305.rss'},
        {name: 'Genshin Impact', url: 'https://thethao247.vn/genshin-impact-c306.rss'}
    ];
    const xe = [
        {name: 'Xe', url: 'https://thethao247.vn/xe-co-c191.rss'},
        {name: 'Đua xe', url: 'https://thethao247.vn/dua-xe-c96.rss'},
        {name: 'Bảng giá xe', url: 'https://thethao247.vn/bang-gia-xe-c202.rss'},
    ];

    const KD = {name: 'Khỏe & đẹp', url: 'https://thethao247.vn/list-c261.rss'};

    const handleCategoryClick = (url: string) => {
        onCategoryChange(url);
    }

    return (
        <header id="header">
            <div className="header-top">
                <div className="container">
                    <div className="logo-relative">
                        <a href="/" title="Thể Thao 247">
                            <img
                                src="https://thethao247.vn/frontend/images/logo.svg?1"
                                alt="Thể thao 247"
                                width="150"
                                height="150"
                            />
                        </a>
                    </div>
                    <div className="logo-event">
                        <a href="/" title="Euro 2024">
                            <img
                                src="https://cdn-img.thethao247.vn/storage/files/SyNguyen/2024/03/22/65fd01def2692.png"
                                alt="Euro 2024"
                                width="127"
                                height="35"
                            />
                        </a>
                    </div>
                </div>
                <nav className="navigation">
                    <div className="main-nav">
                        <div className="container">
                            <ul className="nav-content">
                                <li>
                                    <a href="#" title="Trang chủ thể thao 247" className="home-icon"
                                       onClick={onHomeClick}>
                                        <FontAwesomeIcon icon={faHome} aria-hidden="true"/>
                                    </a>
                                </li>
                                <li>
                                    <a className="relative" href="#"
                                       title={BDVN[0].name}
                                       onClick={() => handleCategoryClick(BDVN[0].url)}>
                                        {BDVN[0].name}
                                    </a>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                {BDVN.slice(1).map(category => (
                                                    <a
                                                        key={category.name}
                                                        href="#" title={category.name}
                                                        onClick={() => handleCategoryClick(category.url)}>
                                                        {category.name}
                                                    </a>))}
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="relative" href="#"
                                       title={BDQT[0].name}
                                       onClick={() => handleCategoryClick(BDQT[0].url)}>
                                        {BDQT[0].name}
                                    </a>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                {BDQT.slice(1).map(category => (
                                                    <a
                                                        key={category.name}
                                                        href="#" title={category.name}
                                                        onClick={() => handleCategoryClick(category.url)}>
                                                        {category.name}
                                                    </a>))}
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="relative" href="#"
                                       title={CN.name}
                                       onClick={() => handleCategoryClick(CN.url)}>
                                        {CN.name}
                                    </a>
                                </li>
                                <li>
                                    <a className="relative" href="#"
                                       title={TT[0].name}
                                       onClick={() => handleCategoryClick(TT[0].url)}>
                                        {TT[0].name}
                                    </a>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                {TT.slice(1).map(category => (
                                                    <a
                                                        key={category.name}
                                                        href="#" title={category.name}
                                                        onClick={() => handleCategoryClick(category.url)}>
                                                        {category.name}
                                                    </a>))}
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="relative" href="#" title={esports[0].name}
                                       onClick={() => handleCategoryClick(esports[0].url)}>
                                        {esports[0].name}
                                    </a>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                {esports.slice(1).map(category => (
                                                    <a
                                                        key={category.name}
                                                        href="#" title={category.name}
                                                        onClick={() => handleCategoryClick(category.url)}>
                                                        {category.name}
                                                    </a>))}
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="relative" href="#" title={xe[0].name}
                                       onClick={() => handleCategoryClick(xe[0].url)}>
                                        {xe[0].name}
                                    </a>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                {xe.slice(1).map(category => (
                                                    <a
                                                        key={category.name}
                                                        href="#" title={category.name}
                                                        onClick={() => handleCategoryClick(category.url)}>
                                                        {category.name}
                                                    </a>))}
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="relative" href="#"
                                       title={KD.name}
                                       onClick={() => handleCategoryClick(KD.url)}>
                                        {KD.name}
                                    </a>
                                </li>
                            </ul>
                            <div className="topsearch">
                                <form action="/search" method="get">
                                    <input type="text" name="q" placeholder="Tìm kiếm..." className="search-input"/>
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
