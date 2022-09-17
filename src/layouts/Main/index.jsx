import '../../assets/css/Main.css'
import {Sidebar} from "../Sidebar";

export function Main() {
    return (
        <div className="container">
            <div className="container-wrapper">
                <Sidebar/>

                <div className="content">
                    <div className="content-header">Buttons</div>
                    <div className="main-content">
                        <div className="components">
                            <div className="component-item">
                                <div className="component-show">
                                    <button>Default</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="controls">
                        <div className="control-nav">
                            <div className="control-nav-wrap">
                                <div className="control-nav-item">
                                    <a href="1" className="control-nav-link">Controls</a>
                                </div>
                                <div className="control-nav-item">
                                    <a href="1" className="control-nav-link">Actions</a>
                                </div>
                            </div>
                        </div>
                        <div className="control-content">
                            <div id="table">
                                <div className="table-header">
                                    <div className="table-title">Name</div>
                                    <div className="table-title">Description</div>
                                    <div className="table-title">Action</div>
                                    <div className="table-title">Control</div>
                                </div>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}