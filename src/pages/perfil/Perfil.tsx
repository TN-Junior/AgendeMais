// src/pages/Perfil.tsx


export default function Perfil() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">👤 Perfil</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm max-w-xl">
        <p className="text-gray-700 mb-2">Nome: João da Silva</p>
        <p className="text-gray-700 mb-2">Email: joao@email.com</p>
        <p className="text-gray-700">Telefone: (81) 99999-0000</p>
      </div>
    </div>
  );
}