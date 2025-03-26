"use client";

import React, { useEffect, useState } from "react";
import Header from "../../components/Header"; // Importe o componente Header
import FooterButtons from "../../components/Button"; // Importe o componente FooterButtons

export default function ResultsPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null); // Estado para a imagem original
  const [filteredImage, setFilteredImage] = useState<string | null>(null); // Estado para a imagem com filtro

  // Função para buscar as imagens do backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images"); // Substitua pela URL da sua API
        if (response.ok) {
          const data = await response.json();
          setOriginalImage(data.originalImage); // URL da imagem original
          setFilteredImage(data.filteredImage); // URL da imagem com filtro
        } else {
          console.error("Erro ao buscar as imagens:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao buscar as imagens:", error);
      }
    };

    fetchImages();
  }, []);

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
                  src={originalImage} // URL da imagem original vinda do backend
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
            <h2 className="text-lg font-semibold mb-4 text-black">Imagem com Filtro</h2> {/* Texto em preto */}
            
            <div className="w-full h-96 bg-gray-400 rounded-lg flex items-center justify-center">
              {filteredImage ? (
                <img
                  src={filteredImage} // URL da imagem com filtro vinda do backend
                  alt="Imagem com Filtro"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span>Carregando...</span> // Placeholder enquanto a imagem é carregada
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Botões no rodapé */}
      <FooterButtons backRoute="/select" saveRoute="/" /> {/* Rotas configuradas */}
    </main>
  );
}