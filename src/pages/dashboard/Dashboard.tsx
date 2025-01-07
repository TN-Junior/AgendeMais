import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({
    consultasHoje: 0,
    consultasCanceladas: 0,
    medicosDisponiveis: 0,
  });

  const [consultas, setConsultas] = useState([]);

  // Chamada ao backend para buscar dados
  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsResponse = await axios.get("http://localhost:8080/api/stats");
        setStats(statsResponse.data);

        const consultasResponse = await axios.get(
          "http://localhost:8080/api/consultas"
        );
        setConsultas(consultasResponse.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Título */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Gerenciamento de Consultas
      </h1>

      {/* Cards Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-md shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Consultas Hoje
          </h2>
          <p className="text-2xl font-bold text-green-600">{stats.consultasHoje}</p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Consultas Canceladas
          </h2>
          <p className="text-2xl font-bold text-red-600">{stats.consultasCanceladas}</p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Médicos Disponíveis
          </h2>
          <p className="text-2xl font-bold text-blue-600">
            {stats.medicosDisponiveis}
          </p>
        </div>
      </div>

      {/* Lista de Consultas */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Consultas Agendadas</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Paciente</th>
                <th className="px-4 py-2 border">Médico</th>
                <th className="px-4 py-2 border">Data</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {consultas.map((consulta: any) => (
                <tr key={consulta.id}>
                  <td className="px-4 py-2 border">{consulta.paciente}</td>
                  <td className="px-4 py-2 border">{consulta.medico}</td>
                  <td className="px-4 py-2 border">{consulta.data}</td>
                  <td className="px-4 py-2 border">{consulta.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
