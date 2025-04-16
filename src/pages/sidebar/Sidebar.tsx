// Sidebar.tsx
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4 shadow-sm">
      <h2 className="text-xl font-bold text-green-600 mb-6">Agende+</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/perfil" className="text-gray-700 hover:text-green-600">Perfil</Link>
        <Link to="/minhas-consultas" className="text-gray-700 hover:text-green-600">Minhas Consultas</Link>
        <Link to="/agendar-consulta" className="text-green-600 font-medium">Agendar Consulta</Link>
        <Link to="/mensagens" className="text-gray-700 hover:text-green-600">Mensagens</Link>
        <Link to="/configuracoes" className="text-gray-700 hover:text-green-600">Configurações</Link>
        <Link to="/sair" className="text-red-500 hover:text-red-600 mt-8">Sair</Link>
      </nav>
    </aside>
  );
}
