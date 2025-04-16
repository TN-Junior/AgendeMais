// src/pages/AgendarConsulta.tsx
import Sidebar from '../sidebar/Sidebar';

export default function AgendarConsulta() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Agendar Consulta</h1>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Detalhes da Consulta</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Médico(a)</label>
                <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400">
                  <option value="">Selecione</option>
                  <option value="ana">Dra. Ana Beatriz</option>
                  <option value="carlos">Dr. Carlos Lima</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Data</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  defaultValue="2024-04-25"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Hora</label>
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  defaultValue="15:00"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition"
              >
                Agendar
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
