"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Props para rotas dinâmicas
interface FooterButtonsProps {
  backRoute: string; // Rota para o botão "Voltar"
  saveRoute: string; // Rota para o botão "Salvar"
}

export default function FooterButtons({ backRoute, saveRoute }: FooterButtonsProps) {
  const router = useRouter();

  // Função para o botão "Salvar"
  const handleSave = () => {
    console.log("Simulação: Dados salvos com sucesso!");
    router.push(saveRoute); // Redireciona para a rota passada como prop
  };

  // Função para o botão "Voltar"
  const handleBack = () => {
    router.push(backRoute); // Redireciona para a rota passada como prop
  };

  return (
    <div className="absolute bottom-16 left-0 w-full flex justify-center gap-12">
      {/* Botão Voltar */}
      <button
        onClick={handleBack}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Voltar
      </button>

      {/* Botão Salvar */}
      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Salvar
      </button>
    </div>
  );
}