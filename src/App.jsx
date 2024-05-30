import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Home from './pages/Home'
import Profile from './pages/Profile';
// Importa otros componentes de página según sea necesario

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:user_id" element={<Profile />} />
        {/* Añadir más rutas aquí */}
      </Routes>
    </Router>
  );
};

export default App;
