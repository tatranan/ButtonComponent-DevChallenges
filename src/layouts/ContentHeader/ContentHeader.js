import React from 'react';
import classes from './ContentHeader.module.css';

const ContentHeader = ({ header }) => {
    return (
        <div>
            <div className={classes["content-header"]}>{header}</div>
        </div>
    );
};

export default ContentHeader;