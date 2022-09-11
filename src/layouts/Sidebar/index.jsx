import logo from '../../assets/images/devchallenges.png';
import '../../assets/css/Main.css'

export function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebar-content">

                <div className="logo">
                    <a href="#" className="logo-link">
                        <span className="logo-text base-color">Dev</span>
                        <span className="logo-text secondary-color">challenges.io</span>
                    </a>
                </div>
                <div className="nav">
                    <div className="nav-wrap">
                        <div className="nav-item">
                            <a href="">Colors</a>
                        </div>
                        <div className="nav-item">
                            <a href="">Typography</a>
                        </div>
                        <div className="nav-item">
                            <a href="">Spaces</a>
                        </div>
                        <div className="nav-item">
                            <a href="">Buttons</a>
                        </div>
                        <div className="nav-item">
                            <a href="">Inputs</a>
                        </div>
                        <div className="nav-item">
                            <a href="">Grid</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}