import React, { useState } from "react";
import './Tabs.css';
import TabItem from "./TabItem";

const Tabs = (props ) => {
    const tab = props.tabs ? props.tabs[0].id : '';
    const tabs = props.tabs ? props.tabs : [];
    const [activeTab, setActiveTab] = useState(tab);

    return (
        <>
            <div className="tabs">
                <ul className="tab-list">
                    {tabs.map(tab => {
                        return <TabItem key={tab.id} id={tab.id} activeTab={activeTab} setActiveTab={setActiveTab} title={tab.title} />
                    })}
                </ul>
            </div>
            <div className="tab-contents">
                {tabs.map(tab => {
                    return <div className="tab-contents--wrap" key={tab.id}>
                        {activeTab === tab.id && tab.content}
                    </div>
                })}
            </div>
        </>

    )
}

export default Tabs;