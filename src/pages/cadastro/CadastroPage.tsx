import React, { useState } from "react";
import axios from "axios";

const CadastroPage: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/auth/register", {
        name: nome, // Alinhado com o backend
        email,
        password: senha, // Alinhado com o backend
      });
      console.log("Cadastro realizado:", response.data);
      setMensagem("Usuário cadastrado com sucesso!");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Erro no Cadastro:", error.response.data);
        setMensagem(error.response.data.message || "Erro ao cadastrar. Tente novamente.");
      } else {
        console.error("Erro desconhecido:", error);
        setMensagem("Erro ao se conectar ao servidor.");
      }
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-50">
      <form
        onSubmit={handleCadastro}
        className="w-full max-w-md bg-white shadow-lg p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 mb-6 text-center">
          CADASTRE-SE
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nome Completo:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
        >
          Cadastrar
        </button>
        {mensagem && <p className="text-center text-green-500 mt-4">{mensagem}</p>}
      </form>
    </div>
  );
};

export default CadastroPage;
