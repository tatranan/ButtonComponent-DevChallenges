import React from 'react';
import classes from './TabItem.module.css';

const TabItem = ({ title, id, activeTab, setActiveTab }) => {
    const tabClickHandler = () => {
        setActiveTab(id)
    }

    const className = `${classes['tab-link']} ${activeTab === id ? classes['tab-active'] : ''}`;
    return (
        <li className="tab-item">
            <div className={className} onClick={tabClickHandler}>{title}</div>
        </li>
    );
};

export default TabItem;