import React from "react";
import './Control.css';

const Control = () => {
    return (
        <div className="controls">
            <div className="control">
                <div className="table">
                    <div className="table-row table-header">
                        <div className="table-row-item">Name</div>
                        <div className="table-row-item">Description</div>
                        <div className="table-row-item">Action</div>
                        <div className="table-row-item">Control</div>
                    </div>
                    <div className="table-row ">
                        <div className="table-row-item"></div>
                        <div className="table-row-item"></div>
                        <div className="table-row-item"></div>
                        <div className="table-row-item"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Control;