import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação

const LoginPage: React.FC = () => {
  const navigate = useNavigate(); // Hook para realizar a navegação entre páginas

  return (
    <div className="flex h-screen">
      {/* Lado esquerdo com imagem e logo */}
      <div className="flex-1 relative bg-green-900">
        <img
          src="src/assets/pexels-shkrabaanthony.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative flex justify-center items-center h-full"></div>
      </div>

      {/* Lado direito com o formulário */}
      <div className="flex-1 flex justify-center items-center bg-gray-50">
        <form className="w-full max-w-md bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 mb-6 text-center">
            Agende+
          </h2>
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
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <p className="text-gray-500 text-sm mt-1">
              7 dígitos, com pelo menos 1 letra maiúscula.
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
          >
            Entrar
          </button>
          <div className="text-center mt-4">
            <span>ou</span>
          </div>
          <button
            type="button"
            className="w-full mt-2 border border-green-500 text-green-500 py-2 px-4 rounded-md hover:bg-green-100 transition"
            onClick={() => navigate("/cadastro")} // Navega para a página de cadastro
          >
            CADASTRE-SE
          </button>
          <p className="text-center text-gray-500 mt-4">
            <a href="/esqueci-senha" className="hover:underline">
              Esqueceu sua senha?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
