// export default Detail;
import React, {useEffect, useState} from 'react';
import axios from 'axios'; // Thư viện để đọc rss
import cheerio from 'cheerio'; // Thư viện xử lý rss
import styles from '../CSS/ArticleDetail.module.css';
import {Link, useParams} from 'react-router-dom';
import {FaRegMessage, FaVolumeHigh, FaVolumeOff} from 'react-icons/fa6';
// import {useDispatch, useSelector} from 'react-redux'; // để lưu trữ dữ liệu cho project

// Định nghĩa interface cho chi tiết bài viết
interface DetailContent {
    title: string;
    demo: string;
    content: string;
    dateUp: string;
    navItems: string[];
}

interface FeedItem {
    title: string;
    link: string;
    imageUrl: string;
}

const Detail: React.FC = () => {
    const {link} = useParams<{ link: string }>();
    const [detail, setDetail] = useState<DetailContent | null>(null);
    const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
    const [commentContent, setCommentContent] = useState<string>(''); // State để lưu nội dung bình luận
    function convertToSlug(text: string) {
        let slug = text.toLowerCase();
        slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        slug = slug.replace(/\s+/g, '-');
        return slug;
    }
    // hàm chuển đổi chuỗi có các ký tự đặc biệt
    function decodeHTMLEntities(text: string): string {
        const entities: { [key: string]: string } = {
            '&apos;': "'",
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
        };

        Object.keys(entities).forEach(entity => {
            const regex = new RegExp(entity, 'g');
            text = text.replace(regex, entities[entity]);
        });

        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        return doc.documentElement.textContent || text;
    }

    const extractLinkPath = (url: string) => {
        const parts = url.split('/');
        return parts[parts.length - 1];
    };

    //chuc năng đọc
    const [isReading, setIsReading] = useState(false);

    const synth = window.speechSynthesis;
    const handleReadText = () => {
        if (synth.speaking) {
            synth.cancel();
            setIsReading(false);
            return;
        }
        const textToRead = detail?.content.replace(/<[^>]*>?/gm, '') || '';
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'vi-VN'; // Thiết lập ngôn ngữ tiếng Việt
        utterance.onend = () => {
            setIsReading(false);
        };
        synth.speak(utterance);
        setIsReading(true);
    };
    const handleStopReading = () => {
        if (synth.speaking) {
            synth.cancel();
            setIsReading(false);
        }
    };

    useEffect(() => {
        async function fetch() {
            try {
                const response = await axios.get(`https://thethao247.vn/${link}`);
                const html = response.data;
                const $ = cheerio.load(html);

                // Sửa các lớp CSS trong HTML để sử dụng className thay vì class
                $('[class]').each((index, element) => {
                    const classes = $(element).attr('class')?.split(' ') || [];
                    classes.forEach(className => {
                        $(element).removeClass(className).addClass(className);
                    });
                });

                // Extract content from the HTML as per your requirement
                const title = decodeHTMLEntities($('.big_title').text().trim() || $('.title-detail').text().trim());
                const content = $('#content_detail').html() || $('.txt_content').html() || $('.col740').html() || '';
                const dateUp = $('.mr-auto').find('.post-time').text() || $('.time').text();
                console.log('dateUp : ' + $('.mr-auto').find('.post-time').text())
                const demo = decodeHTMLEntities($('.sapo_detail').text());
                const img = $('.expNoEdit').find('a').find('img').attr("data-src");
                const navElements = $('.breadcrumb a').toArray();
                const navItems = navElements.map((li) => $(li).text().trim());
                const navItemsFiltered = navItems.slice(1);  // Loại bỏ phần tử đầu tiên
                setDetail({title, demo, content, dateUp, navItems: navItemsFiltered});
                const rssUrl = 'https://thethao247.vn/trang-chu.rss';
                const fetchRSS = async () => {
                    try {
                        const response = await axios.get(rssUrl);
                        const data = response.data;

                        // Parse RSS feed
                        const parser = new DOMParser();
                        const xml = parser.parseFromString(data, 'application/xml');

                        const items = Array.from(xml.querySelectorAll('item')).map(item => {
                            const title = decodeHTMLEntities(item.querySelector('title')?.textContent || '');
                            const link = item.querySelector('link')?.textContent || '';
                            const description = item.querySelector('description')?.textContent || '';

                            // Use cheerio to parse the description HTML and extract the image URL
                            const $ = cheerio.load(description);
                            const imageUrl = $('img').attr('src') || '';
                            return {
                                title,
                                link,
                                imageUrl
                            };
                        });
                        setFeedItems(items);
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                };
                fetchRSS();
            } catch (error) {
                console.error('Error fetching the HTML:', error);
            }
        }

        fetch();
    }, [link]);
    useEffect(() => {
        if (feedItems.length > 5) {
            setFeedItems(feedItems.slice(0, 5)); // Chỉ lấy 5 phần tử đầu tiên
        }
    }, [feedItems]);
    useEffect(() => {
        if (detail?.content) {
            const container = document.getElementById('maincontent');
            if (container) {
                const secretElements = container.querySelectorAll('[data-src]');
                secretElements.forEach((element) => {
                    element.setAttribute('src', element.getAttribute("data-src") || '');
                    // Thêm thuộc tính bạn cần vào đây
                });
                const reLink = container.querySelectorAll('.explus_related_1404022217_item a');
                reLink.forEach((element) => {
                    let originalUrl = element.getAttribute("href") || '';
                    // Lấy đường dẫn gốc từ href
                    element.setAttribute('href', "/article" + extractLinkPath(originalUrl));
                    // Cập nhật lại thuộc tính href của thẻ <a>
                });
            }
        }
    }, [detail]);

    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.breadCrumbDetail}>
                    <ul>
                        {detail?.navItems.map((navItem, index) => (
                            <li key={index}>
                                {index > 0 ? `> ${navItem}` : (<a href={'/' + convertToSlug(navItem)}>{navItem}</a>)}
                            </li>
                        ))}
                    </ul>
                    <div>{detail?.dateUp}</div>
                </div>
                <div className={styles.audioControls}>
                    {isReading ? (
                        <FaVolumeOff onClick={handleStopReading} className={styles.audioIcon} title={"Dừng"}/>
                    ) : (
                        <FaVolumeHigh onClick={handleReadText} className={styles.audioIcon} title={"Nghe"}/>
                    )}
                </div>
                <div>
                    <h1 className={styles.contentDetailTitle}>{detail?.title || 'Loading...'}</h1>
                    <h2 className={styles.contentDetailSapo}>{detail?.demo}</h2>
                    <div className={styles.maincontent} id="maincontent"
                         dangerouslySetInnerHTML={{__html: detail?.content || ''}}>
                    </div>
                </div>
            </div>
            {/*Bài liên quan*/}
            <div className={styles.relateDetail}>
                <h2 className={styles.horizontalHeading}>BÀI LIÊN QUAN</h2>
                <div>
                    {feedItems.map((item, index) => (
                        <div className={styles.horizontalItem} key={index}>
                            <span style={{
                                fontSize: '20px',
                                paddingRight:'10px',paddingTop:'25px',fontWeight:'700',color:'#ababab'}}>{index + 1}</span>
                            <div className={styles.horizontalImage}><img src={item.imageUrl || 'Loading...'}
                                                                         alt={item.title}/></div>
                            <div className={styles.horizontalTitle}><h3><a
                                href={'/article/' + extractLinkPath(item.link)}
                                title={item.title}>{item.title}</a></h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Detail;