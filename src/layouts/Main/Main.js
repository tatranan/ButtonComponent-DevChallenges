import React from "react";
import './Main.css';
import Sidebar from "../Sidebar/Sidebar";
import ContentHeader from '../ContentHeader/ContentHeader'
import Tab from "../../components/Tabs/Tab";
import Control from "../../components/Controls/Control";
import Button from "../../pages/Buttons/Button";

const Main = ({header, content}) => {
    return (
        <div className="container">
            <div className="container-wrapper">
                <Sidebar/>
                <div className="content">
                    <div className="content-wrap">
                        <ContentHeader header={header}/>
                        <div className="main-content">
                            <div className="components">
                                <div className="component-item">
                                    <div className="component-show">
                                        <Button
                                            variant={'text'}
                                            disabled={false}
                                            disableShadow={true}
                                            endIcon={'local_grocery_store'}
                                            size={'lg'}
                                            color={'danger'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-footer">
                        <Tab/>
                        <Control/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;