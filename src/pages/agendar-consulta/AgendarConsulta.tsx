// src/pages/AgendarConsulta.tsx
import React from 'react';

export default function AgendarConsulta() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">➕ Agendar Nova Consulta</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm max-w-xl">
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Nome do profissional</label>
            <input className="w-full mt-1 p-2 border border-gray-300 rounded-lg" type="text" placeholder="Dr. Ana Beatriz" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Data</label>
            <input className="w-full mt-1 p-2 border border-gray-300 rounded-lg" type="date" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Horário</label>
            <input className="w-full mt-1 p-2 border border-gray-300 rounded-lg" type="time" />
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">Agendar</button>
        </form>
      </div>
    </div>
  );
}
