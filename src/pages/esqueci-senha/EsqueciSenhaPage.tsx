import React from "react";

const EsqueciSenhaPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Lado esquerdo com imagem */}
      <div className="flex-1 relative bg-green-900">
        <img
          src="assets/pexels-tima.jpg"  
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative flex justify-center items-center h-full">
          
        </div>
      </div>

      {/* Lado direito com o formulário */}
      <div className="flex-1 flex justify-center items-center bg-gray-50">
        <form className="w-full max-w-md bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 mb-6 text-center">
            ESQUECI MINHA SENHA
          </h2>
          <p className="text-gray-700 text-center mb-6">
            Insira seu email para redefinir sua senha. Você receberá um link em
            seu email.
          </p>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              placeholder="Digite seu email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
          >
            Enviar
          </button>
          <p className="text-center text-gray-500 mt-4">
            <a href="/" className="text-green-500 hover:underline">
              Voltar para o login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default EsqueciSenhaPage;
