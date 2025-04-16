// src/pages/Mensagens.tsx
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { FaEnvelopeOpenText, FaClock, FaTag } from 'react-icons/fa';

export default function Mensagens() {
  const [modoChat, setModoChat] = useState(false);

  const notificacoes = [
    {
      id: 1,
      titulo: 'Nova mensagem',
      conteudo: 'Veja sua nova mensagem',
      icone: <FaEnvelopeOpenText className="w-5 h-5" />, nova: true
    },
    {
      id: 2,
      titulo: 'Lembrete de consulta',
      conteudo: 'Você tem uma consulta amanhã',
      icone: <FaClock className="w-5 h-5" />, nova: false
    },
    {
      id: 3,
      titulo: 'Promoção especial',
      conteudo: 'Descontos exclusivos para você',
      icone: <FaTag className="w-5 h-5" />, nova: false
    },
    {
      id: 4,
      titulo: 'Nova mensagem',
      conteudo: 'Sua próxima consulta foi confirmada',
      icone: <FaEnvelopeOpenText className="w-5 h-5" />, nova: true
    }
  ];

  const mensagens = [
    {
      id: 1,
      remetente: 'Dra. Ana Beatriz',
      horario: '10:30',
      conteudo: 'Olá João! Lembre-se da sua consulta amanhã às 14:00.',
      recebida: true
    },
    {
      id: 2,
      remetente: 'Você',
      horario: '08:15',
      conteudo: 'Bom dia doutora, gostaria de confirmar o horário da consulta.',
      recebida: false
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <h1
          className="text-3xl font-bold text-gray-800 mb-6 cursor-pointer hover:underline"
          onClick={() => setModoChat(false)}
        >
          Mensagens
        </h1>

        {!modoChat ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 max-w-2xl p-6 space-y-4">
            {notificacoes.map((msg) => (
              <div
                key={msg.id}
                onClick={() => setModoChat(true)}
                className={`flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-sm hover:scale-[1.01] transition cursor-pointer ${msg.nova ? 'border-l-4 border-green-500 bg-green-50' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  {msg.icone}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 leading-tight">{msg.titulo}</p>
                  <p className="text-sm text-gray-600">{msg.conteudo}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 max-w-2xl p-6">
            <div className="space-y-6">
              {mensagens.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.recebida ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[70%] p-4 rounded-xl text-sm shadow-sm ${
                      msg.recebida
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    <p className="font-medium mb-1">
                      {msg.recebida ? msg.remetente : 'Você'}{' '}
                      <span className="text-xs text-gray-500">às {msg.horario}</span>
                    </p>
                    <p>{msg.conteudo}</p>
                  </div>
                </div>
              ))}
            </div>

            <form className="mt-6 flex gap-2">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Enviar
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
