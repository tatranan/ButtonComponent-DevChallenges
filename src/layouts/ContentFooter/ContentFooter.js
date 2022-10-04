import React from 'react'
import Tab from '../../components/Tabs/Tab';
import Control from '../../components/Controls/Control';
import classes from './ContentFooter.module.css';

const ContentFooter = (props) => {
    return (
        <div className={classes.footer}>
            <Tab />
            <Control data={props.data} controlData={props.controlActions} />
        </div>
    )
}

export default ContentFooter;