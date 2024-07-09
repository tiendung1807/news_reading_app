import React from 'react';
import '../CSS/Header.css';
import '../CSS/main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faSearch} from '@fortawesome/free-solid-svg-icons';

function Header() {
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
                                    <a href="/" title="Trang chủ thể thao 247" className="home-icon">
                                        <FontAwesomeIcon icon={faHome} aria-hidden="true"/>
                                    </a>
                                </li>
                                <li>
                                    <a className="relative" href="/euro" title="Euro">
                                        Euro
                                    </a>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                <a href="/euro/426-lich-thi-dau-vong-loai-euro-2024-d281373.html"
                                                   title="Lịch thi đấu">
                                                    Lịch thi đấu
                                                </a>
                                                <a href="/livescores/chau-au/euro/results/" title="Kết quả">
                                                    Kết quả
                                                </a>
                                                <a href="https://thethao247.vn/euro/72-bang-xep-hang-vck-euro-2024-moi-nhat-d324901.html"
                                                   title="Bảng xếp hạng">
                                                    Bảng xếp hạng
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="relative" href="https://thethao247.vn/bong-da-viet-nam-c1/"
                                       title="Bóng đá Việt Nam">
                                        Bóng đá Việt Nam
                                    </a>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                <a href="https://thethao247.vn/v-league-c15/" title="V-League">
                                                    V-League
                                                </a>
                                                <a href="https://thethao247.vn/tuyen-quoc-gia-vn-c19/"
                                                   title="Đội tuyển Quốc gia">
                                                    Đội tuyển Quốc gia
                                                </a>
                                                <a href="https://thethao247.vn/bong-da-nu-viet-nam-c20/"
                                                   title="Bóng Đá Nữ">
                                                    Bóng Đá Nữ
                                                </a>
                                                <a href="https://thethao247.vn/bong-da-tre-c329/" title="Bóng đá trẻ">
                                                    Bóng đá trẻ
                                                </a>
                                                <a href="https://thethao247.vn/u23-asian-cup" title="U23 Châu Á">
                                                    U23 Châu Á
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="relative" href="https://thethao247.vn/bong-da-quoc-te-c2/"
                                       title="Bóng đá quốc tế">
                                        Bóng đá quốc tế
                                    </a>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                <a href="https://thethao247.vn/bong-da-anh-c8/" title="Bóng đá Anh">
                                                    Bóng đá Anh
                                                </a>
                                                <a href="https://thethao247.vn/bong-da-tbn-c9/"
                                                   title="Bóng đá Tây Ban Nha - La Liga">
                                                    Bóng đá Tây Ban Nha - La Liga
                                                </a>
                                                <a href="https://thethao247.vn/bong-da-y-c10/"
                                                   title="Bóng đá Ý - Serie A">
                                                    Bóng đá Ý - Serie A
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="relative" href="https://thethao247.vn/tin-chuyen-nhuong-c14/"
                                       title="Chuyển nhượng">
                                        Chuyển nhượng
                                    </a>
                                </li>
                                <li>
                                    <a className="relative" href="https://thethao247.vn/the-thao-tong-hop-c5/"
                                       title="Thể Thao">
                                        Thể Thao
                                    </a>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                <a href="https://thethao247.vn/bong-chuyen-c45/" title="Bóng chuyền">
                                                    Bóng chuyền
                                                </a>
                                                <a href="https://thethao247.vn/bong-ro-c43/" title="Bóng rổ">
                                                    Bóng rổ
                                                </a>
                                                <a href="https://thethao247.vn/vo-thuat-c228/" title="Võ thuật">
                                                    Võ thuật
                                                </a>
                                                <a href="https://thethao247.vn/quan-vot-tennis-c4/"
                                                   title="Tennis">
                                                    Tennis
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="relative" href="https://thethao247.vn/esports-c180/" title="Esports">
                                        Esports
                                    </a>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                <a href="https://thethao247.vn/lien-minh-huyen-thoai-c181/"
                                                   title="LMHT">
                                                    LMHT
                                                </a>
                                                <a href="https://thethao247.vn/valorant-c305/" title="Valorant">
                                                    Valorant
                                                </a>
                                                <a href="https://thethao247.vn/genshin-impact-c306/"
                                                   title="Genshin Impact">
                                                    Genshin Impact
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="relative" href="https://thethao247.vn/xe-co-c191/" title="Xe">
                                        Xe
                                    </a>
                                    <div className="cate-child">
                                        <div className="container">
                                            <nav>
                                                <a href="https://thethao247.vn/dua-xe-c41/" title="Đua xe">
                                                    Đua xe
                                                </a>
                                                <a href="https://thethao247.vn/bang-gia-xe-c202/" title="Bảng giá xe">
                                                    Bảng giá xe
                                                </a>
                                                <a href="https://thethao247.vn/danh-gia-xe-c204/" title="Đánh giá xe">
                                                    Đánh giá xe
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="relative" href="https://thethao247.vn/list-c261/"
                                       title="Khỏe &amp; Đẹp">
                                        Khỏe &amp; Đẹp
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
