import React, { useState } from "react";
import './Tabs.css';
import TabItem from "./TabItem";

const Tabs = (props ) => {
    const [activeTab, setActiveTab] = useState(props.tabs[0].id);

    return (
        <>
            <div className="tabs">
                <ul className="tab-list">
                    {props.tabs.map(tab => {
                        return <TabItem key={tab.id} id={tab.id} activeTab={activeTab} setActiveTab={setActiveTab} title={tab.title} />
                    })}
                </ul>
            </div>
            <div className="tab-contents">
                {props.tabs.map(tab => {
                    return <div className="tab-contents--wrap" key={tab.id}>
                        {activeTab === tab.id && tab.content}
                    </div>
                })}
            </div>
        </>

    )
}

export default Tabs;