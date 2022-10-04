import React from 'react';
// import classes from './Tab.css';

const TabItem = ({title, id, activeTab, setActiveTab}) => {

    const tabClickHandler = () => {
        setActiveTab(id)
    }
    const className = `tab-item ${activeTab === id ? 'active' : ''}`;
    return (
        <li className={className}>
            <div className="tab-link" onClick={tabClickHandler}>{title}</div>
        </li>
    );
};

export default TabItem;