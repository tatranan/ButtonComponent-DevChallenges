import { Routes, Route } from 'react-router-dom'
import Main from './layouts/Main/Main';
import ButtonPage from './pages/ButtonPage';
import ColorPage from './pages/ColorPage';
import GridPage from './pages/GridPage';
import InputPage from './pages/InputPage';
import SpacePage from './pages/SpacePage';
import TypographyPage from './pages/TypographyPage';

function App() {
    return (

        <Main>
            <Routes>
                <Route path="/button" element={<ButtonPage />} />
                <Route path="/input" element={<InputPage />} />
                <Route path="/color" element={<ColorPage />} />
                <Route path="/typography" element={<TypographyPage />} />
                <Route path="/space" element={<SpacePage />} />
                <Route path="/grid" element={<GridPage />} />
            </Routes>
        </Main>

    );
}

export default App;
