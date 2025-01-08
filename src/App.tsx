import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import CadastroPage from "./pages/cadastro/CadastroPage";
import Dashboard from "./pages/dashboard/Dashboard";
import EsqueciSenhaPage from "./pages/esqueci-senha/EsqueciSenhaPage";
import PerfilPage from "./pages/perfil/PerfilPage";
import AgendaPage from "./pages/agenda/AgendaPage";
import UsuariosPage from "./pages/usuarios/UsuariosPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/esqueci-senha" element={<EsqueciSenhaPage />} />
        
        {/* Rotas protegidas */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/agenda" element={<AgendaPage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
      </Routes>
    </div>
  );
};

export default App;
