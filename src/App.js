import {Routes, Route} from 'react-router-dom'
import {BrowserRouter} from "react-router-dom";
import Main from './layouts/Main/Main';
import Button from './pages/Buttons/Button';
import Input from './pages/Inputs/Input';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/button" element={<Main content={<Button/>} header='Buttons'/>}/>
                <Route path="/input" element={<Main content={<Input/>} header='Inputs'/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
