// src/pages/Sair.tsx
import React, { useEffect } from 'react';

export default function Sair() {
  useEffect(() => {
    // Limpar dados do usuário, tokens, etc.
    window.location.href = '/';
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <p className="text-gray-700">Saindo da conta...</p>
    </div>
  );
}