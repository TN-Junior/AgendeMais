import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import CadastroPage from "./pages/cadastro/CadastroPage";
import Dashboard from './pages/dashboard/Dashboard';
import EsqueciSenhaPage from "./pages/esqueci-senha/EsqueciSenhaPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/esqueci-senha" element={<EsqueciSenhaPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;