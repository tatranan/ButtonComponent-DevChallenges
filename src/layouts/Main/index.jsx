import { Sidebar } from "../Sidebar";
import './Main.css';
import { Tab } from "../../components/Tabs";
import { Control } from "../../components/Controls";
export function Main({ header, content }) {
    return (
        <div className="container">
            <div className="container-wrapper">
                <Sidebar />
                <div className="content">
                    <div className="content-wrap">
                        <div className="content-header">{header}</div>
                        {content}
                    </div>
                    <div className="content-footer">
                        <Tab />
                        <Control />
                    </div>

                </div>
            </div>
        </div>
    );
}