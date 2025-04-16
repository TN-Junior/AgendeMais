// Sidebar.tsx
import { Link } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaPlusCircle, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4 shadow-sm">
      <h2 className="text-xl font-bold text-green-600 mb-6">Agende+</h2>
      <nav className="flex flex-col gap-4 text-sm">
        <Link to="/perfil" className="flex items-center gap-2 text-gray-700 hover:text-green-600">
          <FaUser /> Perfil
        </Link>
        <Link to="/minhas-consultas" className="flex items-center gap-2 text-gray-700 hover:text-green-600">
          <FaCalendarAlt /> Minhas Consultas
        </Link>
        <Link to="/agendar-consulta" className="flex items-center gap-2 text-green-600 font-medium">
          <FaPlusCircle /> Agendar Consulta
        </Link>
        <Link to="/mensagens" className="flex items-center gap-2 text-gray-700 hover:text-green-600">
          <FaEnvelope /> Mensagens
        </Link>
        <Link to="/configuracoes" className="flex items-center gap-2 text-gray-700 hover:text-green-600">
          <FaCog /> Configurações
        </Link>
        <Link to="/sair" className="flex items-center gap-2 text-red-500 hover:text-red-600 mt-8">
          <FaSignOutAlt /> Sair
        </Link>
      </nav>
    </aside>
  );
}
