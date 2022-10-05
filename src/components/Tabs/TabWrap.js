import React from 'react'
import classes from './TabWrap.module.css';

const TabWrap = (props) => {
    return (
        <div className={classes['tab-wrap']}>
            {props.children}
        </div>
    )
}

export default TabWrap;