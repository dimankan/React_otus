import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    
    <BrowserRouter>
       <nav>
        <ul>
          <li>
            <Link to={'/'}>Стартовая</Link>
          </li>
          <li>
            <Link to={'/login'}>Логин</Link>
          </li>
          <li>
            <Link to={'/register'}>Регистрация</Link>
          </li>
          <li>
            <Link to={'NotExistRout'}>Некорректный</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
