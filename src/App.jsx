import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<UserPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;