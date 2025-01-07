import React from "react";

const CadastroPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Lado esquerdo com imagem */}
      <div className="flex-1 relative bg-green-900">
        <img
          src="src/assets/medibackground.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative flex justify-center items-center h-full">
          <div className="bg-white p-10 rounded-full shadow-md">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-3xl font-bold">+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lado direito com o formulário */}
      <div className="flex-1 flex justify-center items-center bg-gray-50">
        <form className="w-full max-w-md bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 mb-6 text-center">
            CADASTRE-SE
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nome Completo:</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              placeholder="Digite seu email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Senha:</label>
            <input
              type="password"
              placeholder="Crie uma senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Confirmar Senha:</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
          >
            Cadastrar
          </button>
          <p className="text-center text-gray-500 mt-4">
            Já possui uma conta?{" "}
            <a href="/" className="text-green-500 hover:underline">
              Faça login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CadastroPage;
