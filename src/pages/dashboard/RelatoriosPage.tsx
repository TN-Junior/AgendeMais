// src/pages/dashboard/RelatoriosPage.tsx
import React from "react";
import axios from "axios";

const RelatoriosPage = () => {
  const handleGenerate = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/relatorios/consultas", {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "relatorio_consultas.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Erro ao gerar relatório:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Relatórios</h1>
      <button className="bg-green-500 text-white px-4 py-2" onClick={handleGenerate}>
        Gerar Relatório
      </button>
    </div>
  );
};

export default RelatoriosPage;
