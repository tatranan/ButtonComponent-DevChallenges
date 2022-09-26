import React from "react";
import {Link} from "react-router-dom";
import './Tab.css';

const Tab = () => {
    return (
        <div className="tab">
            <div className="tab-wrap">
                <div className="tab-item">
                    <Link to="1" className="tab-link">Controls</Link>
                </div>
                <div className="tab-item">
                    <Link to="1" className="tab-link">Actions</Link>
                </div>
            </div>
        </div>
    )
}

export default Tab;