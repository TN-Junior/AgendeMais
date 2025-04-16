
import Sidebar from '../sidebar/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-1">Olá, João!</h1>
        <p className="text-gray-600 mb-6 flex items-center gap-2">👋 Que bom ter você aqui.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          {/* Coluna 1 */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-5 rounded-2xl shadow-sm min-h-[100px]">
              <h2 className="text-base font-semibold text-gray-900">Próxima consulta</h2>
              <p className="text-gray-700 mt-1 text-sm">Dr. Ana Beatriz</p>
              <p className="text-gray-500 text-sm">20/04 às 14:00</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm min-h-[100px]">
              <h2 className="text-base font-semibold text-gray-900">Último atendimento</h2>
              <p className="text-gray-700 mt-1 text-sm">Resumo da última consulta</p>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="flex flex-col gap-4">
            <div className="min-h-[100px] flex items-center justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full shadow transition-all">
                + Agendar nova consulta
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm min-h-[100px]">
              <h2 className="text-base font-semibold text-gray-900">Mensagens</h2>
              <p className="text-gray-700 mt-1 text-sm">Você tem novas mensagens</p>
            </div>
          </div>

          {/* Coluna 3 */}
          <div className="bg-white p-5 rounded-2xl shadow-sm min-h-[208px]">
            <h2 className="text-base font-semibold text-gray-900 mb-2">Abril 2024</h2>
            <p className="text-gray-600 text-sm">(Calendário interativo aqui)</p>
          </div>
        </div>
      </main>
    </div>
  );
}
