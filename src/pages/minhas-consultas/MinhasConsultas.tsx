// src/pages/MinhasConsultas.tsx


export default function MinhasConsultas() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">📅 Minhas Consultas</h1>
      <div className="bg-white rounded-xl shadow-sm p-6 max-w-3xl">
        <ul className="space-y-4">
          <li className="border-b pb-2">
            <p className="text-gray-800 font-medium">Dr. Ana Beatriz - 20/04 às 14:00</p>
            <p className="text-sm text-gray-500">Consulta de rotina</p>
          </li>
          <li className="border-b pb-2">
            <p className="text-gray-800 font-medium">Dr. Carlos Lima - 10/03 às 09:30</p>
            <p className="text-sm text-gray-500">Retorno ortopédico</p>
          </li>
        </ul>
      </div>
    </div>
  );
}