"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function FooterButtons() {
  const router = useRouter();

  // Função para o botão "Salvar"
  const handleSave = async () => {
    try {
      // Simulação de salvamento bem-sucedido
      console.log("Simulação: Dados salvos com sucesso!");
      router.push("/results"); // Redireciona para a página "/results"
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  };

  // Função para o botão "Voltar"
  const handleBack = () => {
    router.push("/"); // Redireciona para a página inicial (Home)
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