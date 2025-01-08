// src/pages/agenda/AgendaPage.tsx
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

const AgendaPage = () => {
  const [date, setDate] = useState(new Date());
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/medicos/1/consultas") // Substituir por ID dinâmico
      .then((response) => setConsultas(response.data))
      .catch((error) => console.error("Erro ao buscar agenda:", error));
  }, [date]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Agenda do Médico</h1>
      <Calendar
        onChange={setDate}
        value={date}
        className="mb-8"
      />
      <ul>
        {consultas.map((consulta) => (
          <li key={consulta.id} className="mb-2">
            {consulta.horario} - {consulta.paciente}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgendaPage;