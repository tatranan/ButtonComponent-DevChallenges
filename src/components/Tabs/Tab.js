import React, {useState} from "react";
// import {Link} from "react-router-dom";
import './Tab.css';
import TabItem from "./TabItem";

const Tab = () => {
    const [activeTab, setActiveTab] =useState('docs');


    return (
        <div className="tab">
            <ul className="tab-wrap">
                <TabItem id="docs" activeTab={activeTab} setActiveTab={setActiveTab} title="Docs"/>
                <TabItem id="actions" activeTab={activeTab} setActiveTab={setActiveTab} title="Actions"/>

            </ul>
        </div>
    )
}

export default Tab;