import React from "react";
import './Main.css';
import Sidebar from "../Sidebar/Sidebar";

const Main = (props) => {
    return (
        <div className="container">
            <div className="container-wrapper">
                <Sidebar />
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Main;