"use client";

import React from "react";
import Header from "../../components/Header"; // Importe o componente Header
import { useRouter } from "next/navigation";

export default function InitialPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center h-screen">
      <Header /> {/* Exibe o componente Header */}
      <div className="mt-15 text-lg font-semibold text-center text-gray-800">
        Bem-vindo à página inicial da plataforma ImageTransform, onde você pode aplicar filtros em suas imagens.
      </div>
      <div className="mt-20 text-lg font-semibold text-center text-gray-800">
        Deseja aplicar filtro em sua imagem?
      </div>
      {/* Botão para ir para a página de seleção de filtro */}
      <button
            onClick={() => router.push("/")} // Redireciona para a página de câmera
            className="bg-green-500 mt-20 text-white px-10 py-2 rounded-lg hover:bg-green-600"
          >
            Adicionar Filtro
      </button>
    </main>
  );
}
