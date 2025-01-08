// src/pages/perfil/PerfilPage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const PerfilPage = () => {
  const [user, setUser] = useState({ nome: "", email: "", telefone: "" });

  useEffect(() => {
    axios.get("http://localhost:8080/api/usuarios/1") // Substituir por ID dinâmico
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Erro ao buscar perfil:", error));
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:8080/api/usuarios/1", user);
      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Perfil do Usuário</h1>
      <input
        type="text"
        className="border p-2 w-full mb-4"
        placeholder="Nome"
        value={user.nome}
        onChange={(e) => setUser({ ...user, nome: e.target.value })}
      />
      <input
        type="email"
        className="border p-2 w-full mb-4"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="text"
        className="border p-2 w-full mb-4"
        placeholder="Telefone"
        value={user.telefone}
        onChange={(e) => setUser({ ...user, telefone: e.target.value })}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleUpdate}
      >
        Atualizar Perfil
      </button>
    </div>
  );
};

export default PerfilPage;