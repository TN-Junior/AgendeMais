// src/pages/MinhasConsultas.tsx
import Sidebar from '../sidebar/Sidebar';
import { FaCalendarAlt, FaUserMd, FaClock } from 'react-icons/fa';

export default function MinhasConsultas() {
  const consultas = [
    { data: '20 de maio de 2024', medico: 'Dra. Ana Beatriz', hora: 'Às 14:00' },
    { data: '15 de maio de 2024', medico: 'Dra. Ana Beatriz', hora: 'Às 14:00' },
    { data: '30 de abril de 2024', medico: 'Dra. Ana Beatriz', hora: 'Às 14:00' },
    { data: '22 de abril de 2024', medico: 'Dra. Ana Beatriz', hora: 'Às 14:00' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Minhas Consultas</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {consultas.map((consulta, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow border border-gray-200 hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 text-gray-700 mb-1">
                <FaCalendarAlt className="text-green-600" />
                <span className="font-semibold text-lg">{consulta.data}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 mb-1">
                <FaUserMd className="text-blue-600" />
                <span>{consulta.medico}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <FaClock className="text-gray-500" />
                <span>{consulta.hora}</span>
              </div>

              <div className="mt-4 flex gap-3">
                <button className="text-sm text-blue-600 hover:underline">Reagendar</button>
                <button className="text-sm text-red-500 hover:underline">Cancelar</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}