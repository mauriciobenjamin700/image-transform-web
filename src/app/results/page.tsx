"use client";

import React, { useEffect, useState } from "react";
import Header from "../../components/Header"; // Importe o componente Header
import FooterButtons from "../../components/Button"; // Importe o componente FooterButtons

export default function ResultsPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null); // URL da imagem original
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null); // Estado para o filtro selecionado

  // Função para buscar os dados do localStorage
  useEffect(() => {
    const file = localStorage.getItem("selectedFile"); // Recupera a URL da imagem selecionada
    const filter = localStorage.getItem("selectedFilter"); // Recupera o filtro selecionado

    setOriginalImage(file); // Define a URL da imagem original no estado
    setSelectedFilter(filter); // Define o filtro selecionado no estado
  }, []);

  // Função para o botão "Salvar"
  const handleSave = () => {
    alert("Ação de salvar executada!"); // Substitua pela lógica necessária
  };

  return (
    <main className="flex flex-col items-center h-screen">
      <Header /> {/* Cabeçalho da página */}

      {/* Conteúdo principal */}
      <div className="flex justify-center items-center flex-grow w-full px-4">
        {/* Div para as imagens */}
        <div className="flex justify-between w-full max-w-4xl gap-8">
          {/* Imagem original */}
          <div className="flex flex-col items-center w-1/2 bg-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 text-black">Imagem Original</h2> {/* Texto em preto */}
          
            <div className="w-full h-96 bg-gray-400 rounded-lg flex items-center justify-center">
              {originalImage ? (
                <img
                  src={originalImage} // URL da imagem salva no localStorage
                  alt="Imagem Original"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span>Carregando...</span> // Placeholder enquanto a imagem é carregada
              )}
            </div>
          </div>

          {/* Imagem com filtro aplicado */}
          <div className="flex flex-col items-center w-1/2 bg-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 text-black">Filtro Aplicado</h2> {/* Texto em preto */}
            
            <div className="w-full h-96 bg-gray-400 rounded-lg flex items-center justify-center">
              {selectedFilter ? (
                <span className="text-black text-lg font-semibold">{selectedFilter}</span> // Exibe o filtro selecionado
              ) : (
                <span>Carregando...</span> // Placeholder enquanto o filtro é carregado
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Botões no rodapé */}
      <FooterButtons
        backRoute="/select"
        saveAction={handleSave} // Passa a função personalizada para o botão "Salvar"
      />
    </main>
  );
}