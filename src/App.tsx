import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import CadastroPage from "./pages/cadastro/CadastroPage";
import Dashboard from './pages/dashboard/Dashboard';
import EsqueciSenhaPage from "./pages/esqueci-senha/EsqueciSenhaPage";
import Perfil from './pages/perfil/Perfil';
import MinhasConsultas from './pages/minhas-consultas/MinhasConsultas';
import AgendarConsulta from './pages/agendar-consulta/AgendarConsulta';
import Mensagens from './pages/mensagens/Mensagens';
import Configuracoes from './pages/configuracoes/Configuracoes';
import Sair from './pages/sair/Sair';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
      <Route path="/esqueci-senha" element={<EsqueciSenhaPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/minhas-consultas" element={<MinhasConsultas />} />
      <Route path="/agendar-consulta" element={<AgendarConsulta />} />
      <Route path="/mensagens" element={<Mensagens />} />
      <Route path="/configuracoes" element={<Configuracoes />} />
      <Route path="/sair" element={<Sair />} />
    </Routes>
  );
};

export default App;