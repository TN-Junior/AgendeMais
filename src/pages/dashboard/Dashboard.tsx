import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Gerenciamento de Consultas</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <p className="text-gray-700">
          Bem-vindo ao sistema de gerenciamento de consultas médicas. Use o menu para acessar diferentes funcionalidades.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
