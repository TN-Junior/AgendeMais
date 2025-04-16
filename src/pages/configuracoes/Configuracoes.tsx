// src/pages/Configuracoes.tsx
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';

export default function Configuracoes() {
  const [modoEscuro, setModoEscuro] = useState(false);
  const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);
  const [idioma, setIdioma] = useState('pt-BR');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Configurações</h1>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 max-w-2xl p-6 space-y-6">
          {/* Modo escuro */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">Modo escuro</p>
              <p className="text-sm text-gray-600">Ativar modo escuro na interface</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={modoEscuro}
                onChange={() => setModoEscuro(!modoEscuro)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 relative">
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform ${
                    modoEscuro ? 'translate-x-5' : ''
                  }`}
                ></div>
              </div>
            </label>
          </div>

          {/* Notificações */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">Notificações</p>
              <p className="text-sm text-gray-600">Permitir notificações por e-mail</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notificacoesAtivas}
                onChange={() => setNotificacoesAtivas(!notificacoesAtivas)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 relative">
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform ${
                    notificacoesAtivas ? 'translate-x-5' : ''
                  }`}
                ></div>
              </div>
            </label>
          </div>

          {/* Idioma */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="font-semibold text-gray-800 mb-1">Idioma</p>
            <select
              value={idioma}
              onChange={(e) => setIdioma(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            >
              <option value="pt-BR">Português (Brasil)</option>
              <option value="en-US">English (US)</option>
              <option value="es-ES">Español</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
}
