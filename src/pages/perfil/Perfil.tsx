// src/pages/Perfil.tsx
import { useState, ChangeEvent } from 'react';
import Sidebar from '../sidebar/Sidebar';
import defaultAvatar from '../../../public/assets/avatar-green.png';
import { FaCamera } from 'react-icons/fa';

export default function Perfil() {
  const [nome, setNome] = useState('João da Silva');
  const [email, setEmail] = useState('joao@email.com');
  const [telefone, setTelefone] = useState('(81) 99999-0000');
  const [senha, setSenha] = useState('123456');
  const [foto, setFoto] = useState<string | null>(null);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [salvo, setSalvo] = useState(false);

  const handleFotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSalvo(true);
    setTimeout(() => setSalvo(false), 3000);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 px-4 py-8 overflow-y-auto flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-sm max-w-lg w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Perfil</h1>

          {/* Foto do usuário */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative w-28 h-28 mb-2">
              <img
                src={foto || defaultAvatar}
                alt="Foto de perfil"
                className="w-28 h-28 rounded-full object-cover border border-gray-300"
              />
              <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 border cursor-pointer shadow-sm hover:bg-gray-100 transition">
                <input type="file" className="hidden" accept="image/*" onChange={handleFotoChange} />
                <FaCamera className="w-4 h-4 text-gray-600" />
              </label>
            </div>
            <p className="text-sm text-gray-500">Clique no ícone para atualizar a foto</p>
          </div>

          {/* Formulário */}
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Informações do Perfil</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Nome</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Telefone</label>
              <input
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Senha</label>
              <div className="relative">
                <input
                  type={mostrarSenha ? 'text' : 'password'}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                />
                <span
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 cursor-pointer"
                >
                  {mostrarSenha ? 'Ocultar' : 'Mostrar'}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-2 shadow-sm transition"
            >
              Salvar
            </button>

            {salvo && (
              <p className="text-green-600 text-sm mt-2">Perfil salvo com sucesso!</p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}
