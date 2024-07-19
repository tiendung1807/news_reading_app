import React from 'react';
import '../CSS/SortComponent.css';

interface SortComponentProps {
    setSortKey: (key: string) => void;
    setSortOrder: (order: string) => void;
}

const SortComponent: React.FC<SortComponentProps> = ({ setSortKey, setSortOrder }) => {
    const handleSortKeyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortKey(e.target.value);
    };

    const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className="sort-container">
            <label htmlFor="sortKey">Sắp xếp theo:</label>
            <select id="sortKey" onChange={handleSortKeyChange}>
                <option value="pubDate">Ngày</option>
                <option value="title">Tiêu đề</option>
            </select>
            <label htmlFor="sortOrder">Thứ tự:</label>
            <select id="sortOrder" onChange={handleSortOrderChange}>

                <option value="asc">Tăng dần</option>
                <option value="desc">Giảm dần</option>
            </select>
        </div>
    );
};

export default SortComponent;
