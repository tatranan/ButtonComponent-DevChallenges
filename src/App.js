import { Routes, Route } from 'react-router-dom'
import Main from './layouts/Main/Main';
import ButtonPage from './pages/ButtonPage';
import InputPage from './pages/InputPage';

function App() {
    return (

        <Main>
            <Routes>
                {/* <Route path="/" element={<Main />} /> */}
                <Route path="/button" element={<ButtonPage />} />
                <Route path="/input" element={<InputPage />} />
            </Routes>
        </Main>

    );
}

export default App;
