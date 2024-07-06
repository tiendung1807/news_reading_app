import React from 'react';
import '../CSS/CategoryArticleBody.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';


function CategoryArticleBody() {
    return (
        <main>
            <div className={"container"}>
                <div className={"breadcrumb"}>
                    <a href="https://thethao247.vn" title="Trang chủ">Trang chủ</a>
                    <FontAwesomeIcon icon={faAngleRight}/>
                    <a href="https://thethao247.vn/bong-da-viet-nam-c1/" className="active" title="Bóng đá Việt Nam">Bóng
                        đá
                        Việt Nam</a>
                </div>
                <div className={"content"}>
                    <h1 className={"big_title"}>Bóng đá Việt Nam</h1>
                    <div className={"cover"}>
                        <a href="https://thethao247.vn/405-hoang-duc-thi-dau-voi-doi-han-quoc-d334614.html"
                           className="thumb" title="Hoàng Đức thi đấu với đội Hàn Quốc">
                            <img className=""
                                 src="https://cdn-img.thethao247.vn/resize_1080x716/storage/files/nvhainam/2024/07/06/6688cc9778270.jpg"
                                 width="540" height="358"
                                 alt="Hoàng Đức thi đấu với đội Hàn Quốc"/>
                        </a>

                        <div className={"text"}>
                            <a href="https://thethao247.vn/405-hoang-duc-thi-dau-voi-doi-han-quoc-d334614.html"
                               className="title" title="Hoàng Đức thi đấu với đội Hàn Quốc">Hoàng Đức thi đấu với
                                đội
                                Hàn Quốc</a>
                            <p className="sapo">
                                Tiền vệ Nguyễn Hoàng Đức cùng các cầu thủ Thể Công Viettel sẽ thi đấu với đội bóng
                                Hàn
                                Quốc thời gian tới đây. </p>
                        </div>
                    </div>
                    <ul className={"list-news"}>
                        <li>
                            <a href="https://thethao247.vn/405-tuyen-thu-viet-nam-do-mau-tren-san-d334607.html"
                               className="thumb" title="Tuyển thủ Việt Nam đổ máu trên sân">
                                <img className=""
                                     src="https://cdn-img.thethao247.vn/resize_800x528/storage/files/nvhainam/2024/07/06/do-mau-1720238504-110307avatar.jpg"
                                     width="400" height="264"
                                     alt="Tuyển thủ Việt Nam đổ máu trên sân"/>
                            </a>
                            <h2 className="title">
                                <a
                                    href="https://thethao247.vn/405-tuyen-thu-viet-nam-do-mau-tren-san-d334607.html"
                                    className="" title="Tuyển thủ Việt Nam đổ máu trên sân">Tuyển thủ Việt Nam đổ máu
                                    trên
                                    sân</a>
                            </h2>
                        </li>
                        <li>
                            <a href="https://thethao247.vn/405-hlv-viet-nam-dat-ky-vong-2-cau-thu-d334601.html"
                               className="thumb" title="HLV Việt Nam đặt kỳ vọng 2 cầu thủ">
                                <img className=""
                                     src="https://cdn-img.thethao247.vn/resize_800x528/storage/files/nvhainam/2024/07/06/449749837-1000770755018684-7297048988969305798-n-1720235719-101808avatar.jpg"
                                     width="400"
                                     height="264"
                                     alt="HLV Việt Nam đặt kỳ vọng 2 cầu thủ"/>
                            </a>
                            <h2 className="title">
                                <a
                                    href="https://thethao247.vn/405-hlv-viet-nam-dat-ky-vong-2-cau-thu-d334601.html"
                                    className="" title="HLV Việt Nam đặt kỳ vọng 2 cầu thủ">HLV Việt Nam đặt kỳ vọng 2
                                    cầu
                                    thủ</a>
                            </h2>
                        </li>
                        <li>
                            <a href="https://thethao247.vn/432-video-u19-viet-nam-thang-dam-6-1-o-tran-da-tap-dau-tien-d334597.html"
                               className="thumb" title="Video: U19 Việt Nam thắng đậm 6-1 ở trận đá tập đầu tiên">
                                <img
                                    className=""
                                    src="https://cdn-img.thethao247.vn/resize_800x528/storage/files/nghuyen/2024/07/06/img-8121-1720233682-094306avatar.jpg"
                                    width="400" height="264"
                                    alt="Video: U19 Việt Nam thắng đậm 6-1 ở trận đá tập đầu tiên"/>
                            </a>
                            <h2 className="title">
                                <a
                                    href="https://thethao247.vn/432-video-u19-viet-nam-thang-dam-6-1-o-tran-da-tap-dau-tien-d334597.html"
                                    className="" title="Video: U19 Việt Nam thắng đậm 6-1 ở trận đá tập đầu tiên">Video:
                                    U19
                                    Việt Nam thắng đậm 6-1 ở trận đá tập đầu tiên</a>
                            </h2>
                        </li>
                    </ul>
                </div>
                <div className={"caption"}>
                    <h2>
                        <a className={"title"} href={"javascript:;"} title={"Bóng đá Việt Nam mới nhất"}>
                            <span>Mới nhất</span>
                        </a>
                    </h2>
                </div>
                <ul id={"box_latest_more"} className={"box_latest_more"}>
                    <li>
                        <a href="https://thethao247.vn/405-ldbd-dong-nam-a-canh-bao-doi-bong-viet-nam-d334512.html"
                           className="thumb" title="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam">
                            <img className=""
                                 src="https://cdn-img.thethao247.vn/resize_784x500/storage/files/nvhainam/2024/07/05/cahn-1-1720173330-165816avatar.jpg"
                                 width="392"
                                 height="250"
                                 alt="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam"/>
                        </a>
                        <div className={"text"}>
                            <h3>
                                <a
                                    href="https://thethao247.vn/405-ldbd-dong-nam-a-canh-bao-doi-bong-viet-nam-d334512.html"
                                    className="title" title="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam">LĐBĐ Đông Nam Á
                                    cảnh báo đội bóng Việt Nam</a></h3>
                            <p className="sapo">CLB Công an Hà Nội (CAHN) nhận cảnh báo từ AFF khi tham dự giải vô địch
                                CLB Đông Nam Á mùa 2024/25.</p>
                        </div>
                    </li>
                    <li>
                        <a href="https://thethao247.vn/405-ldbd-dong-nam-a-canh-bao-doi-bong-viet-nam-d334512.html"
                           className="thumb" title="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam">
                            <img className=""
                                 src="https://cdn-img.thethao247.vn/resize_784x500/storage/files/nvhainam/2024/07/05/cahn-1-1720173330-165816avatar.jpg"
                                 width="392"
                                 height="250"
                                 alt="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam"/>
                        </a>
                        <div className={"text"}>
                            <h3>
                                <a
                                    href="https://thethao247.vn/405-ldbd-dong-nam-a-canh-bao-doi-bong-viet-nam-d334512.html"
                                    className="title" title="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam">LĐBĐ Đông Nam Á
                                    cảnh báo đội bóng Việt Nam</a></h3>
                            <p className="sapo">CLB Công an Hà Nội (CAHN) nhận cảnh báo từ AFF khi tham dự giải vô địch
                                CLB Đông Nam Á mùa 2024/25.</p>
                        </div>
                    </li>
                    <li>
                        <a href="https://thethao247.vn/405-ldbd-dong-nam-a-canh-bao-doi-bong-viet-nam-d334512.html"
                           className="thumb" title="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam">
                            <img className=""
                                 src="https://cdn-img.thethao247.vn/resize_784x500/storage/files/nvhainam/2024/07/05/cahn-1-1720173330-165816avatar.jpg"
                                 width="392"
                                 height="250"
                                 alt="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam"/>
                        </a>
                        <div className={"text"}>
                            <h3>
                                <a
                                    href="https://thethao247.vn/405-ldbd-dong-nam-a-canh-bao-doi-bong-viet-nam-d334512.html"
                                    className="title" title="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam">LĐBĐ Đông Nam Á
                                    cảnh báo đội bóng Việt Nam</a></h3>
                            <p className="sapo">CLB Công an Hà Nội (CAHN) nhận cảnh báo từ AFF khi tham dự giải vô địch
                                CLB Đông Nam Á mùa 2024/25.</p>
                        </div>
                    </li>
                    <li>
                        <a href="https://thethao247.vn/405-ldbd-dong-nam-a-canh-bao-doi-bong-viet-nam-d334512.html"
                           className="thumb" title="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam">
                            <img className=""
                                 src="https://cdn-img.thethao247.vn/resize_784x500/storage/files/nvhainam/2024/07/05/cahn-1-1720173330-165816avatar.jpg"
                                 width="392"
                                 height="250"
                                 alt="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam"/>
                        </a>
                        <div className={"text"}>
                            <h3>
                                <a
                                    href="https://thethao247.vn/405-ldbd-dong-nam-a-canh-bao-doi-bong-viet-nam-d334512.html"
                                    className="title" title="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam">LĐBĐ Đông Nam Á
                                    cảnh báo đội bóng Việt Nam</a></h3>
                            <p className="sapo">CLB Công an Hà Nội (CAHN) nhận cảnh báo từ AFF khi tham dự giải vô địch
                                CLB Đông Nam Á mùa 2024/25.</p>
                        </div>
                    </li>
                    <li>
                        <a href="https://thethao247.vn/405-ldbd-dong-nam-a-canh-bao-doi-bong-viet-nam-d334512.html"
                           className="thumb" title="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam">
                            <img className=""
                                 src="https://cdn-img.thethao247.vn/resize_784x500/storage/files/nvhainam/2024/07/05/cahn-1-1720173330-165816avatar.jpg"
                                 width="392"
                                 height="250"
                                 alt="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam"/>
                        </a>
                        <div className={"text"}>
                            <h3>
                                <a
                                    href="https://thethao247.vn/405-ldbd-dong-nam-a-canh-bao-doi-bong-viet-nam-d334512.html"
                                    className="title" title="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam">LĐBĐ Đông Nam Á
                                    cảnh báo đội bóng Việt Nam</a></h3>
                            <p className="sapo">CLB Công an Hà Nội (CAHN) nhận cảnh báo từ AFF khi tham dự giải vô địch
                                CLB Đông Nam Á mùa 2024/25.</p>
                        </div>
                    </li>
                    <li>
                        <a href="https://thethao247.vn/405-ldbd-dong-nam-a-canh-bao-doi-bong-viet-nam-d334512.html"
                           className="thumb" title="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam">
                            <img className=""
                                 src="https://cdn-img.thethao247.vn/resize_784x500/storage/files/nvhainam/2024/07/05/cahn-1-1720173330-165816avatar.jpg"
                                 width="392"
                                 height="250"
                                 alt="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam"/>
                        </a>
                        <div className={"text"}>
                            <h3>
                                <a
                                    href="https://thethao247.vn/405-ldbd-dong-nam-a-canh-bao-doi-bong-viet-nam-d334512.html"
                                    className="title" title="LĐBĐ Đông Nam Á cảnh báo đội bóng Việt Nam">LĐBĐ Đông Nam Á
                                    cảnh báo đội bóng Việt Nam</a></h3>
                            <p className="sapo">CLB Công an Hà Nội (CAHN) nhận cảnh báo từ AFF khi tham dự giải vô địch
                                CLB Đông Nam Á mùa 2024/25.</p>
                        </div>
                    </li>
                </ul>
                <a href={"javascript:;"} id={"loadMoreNews"} className={"btn_loadMore"}>Xem thêm</a>
            </div>
        </main>
    );
}

export default CategoryArticleBody;