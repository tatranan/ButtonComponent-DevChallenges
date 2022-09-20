import './App.css';
import { Routes, Route } from 'react-router-dom'
// import routes from './pages/routes';
import { Buttons } from './pages/Buttons';
import { Main } from './layouts/Main';
import { Inputs } from './pages/Inputs'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/button" element={<Main content={<Buttons />} header='Buttons' />} />
      <Route path="/input" element={<Main content={<Inputs />} header='Inputs' />} />
    </Routes>
  );
}
// <Route path="/button" element={<Buttons />} />
export default App;
