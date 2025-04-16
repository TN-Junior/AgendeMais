// src/pages/Mensagens.tsx
import React from 'react';

export default function Mensagens() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">💬 Mensagens</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm max-w-2xl">
        <p className="text-gray-700">Você tem 2 mensagens novas.</p>
        <ul className="mt-4 space-y-2">
          <li className="text-sm text-gray-600">📨 "Lembrete: consulta amanhã às 14:00."</li>
          <li className="text-sm text-gray-600">📨 "Dr. Ana Beatriz respondeu sua mensagem."</li>
        </ul>
      </div>
    </div>
  );
}