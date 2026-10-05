// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Inicio from './pages/Inicio/Inicio';
import Sobre from './pages/Sobre/Sobre';
import ProjetosExperiencia from './pages/ProjetosExperiencia/ProjetosExperiencia';
import Servicos from './pages/Servicos/Servicos';
import MateriaisGratuitos from './pages/MateriaisGratuitos/MateriaisGratuitos';
import FloatingButtons from './components/FloatingButtons/FloatingButtons';
import Curriculo from './pages/Curriculo/Curriculo';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos-e-experiencias" element={<ProjetosExperiencia />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/materiais-gratuitos" element={<MateriaisGratuitos />} />
          <Route path="/curriculo" element={<Curriculo />} />
        </Routes>
      </main>
      <FloatingButtons /> {/* Adicione ele aqui fora das rotas! */}
      <Footer />
    </>
  );
}

export default App;