import { Link, NavLink } from 'react-router-dom';
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
                            <NavLink className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} to="/color">Colors</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} to="/typography">Typography</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} to="/space">Spaces</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} to="/button">Buttons</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} to="/input">Inputs</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} to="/grid">Grid</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;