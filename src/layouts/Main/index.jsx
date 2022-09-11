import logo from '../../assets/images/devchallenges.png';
import '../../assets/css/Main.css'
import {Sidebar} from "../Sidebar";

export function Main() {
    return (
        <div className="container">
            <div className="container-wrapper">
                <Sidebar/>
            </div>
        </div>
    );
}