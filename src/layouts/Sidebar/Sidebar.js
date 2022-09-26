import {Link} from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <span className="logo-text base-color">Dev</span>
                        <span className="logo-text secondary-color">challenges.io</span>
                    </Link>
                </div>
                <div className="nav">
                    <div className="nav-wrap">
                        <div className="nav-item">
                            <a href="/#">Colors</a>
                        </div>
                        <div className="nav-item">
                            <a href="/#">Typography</a>
                        </div>
                        <div className="nav-item">
                            <a href="/#">Spaces</a>
                        </div>
                        <div className="nav-item">
                            <Link to="/button">Buttons</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/input">Inputs</Link>
                        </div>
                        <div className="nav-item">
                            <a href="/#">Grid</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;