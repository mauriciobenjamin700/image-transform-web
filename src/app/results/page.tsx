"use client";

import React, { useEffect, useState } from "react";
import Header from "../../components/Header"; // Importe o componente Header
import FooterButtons from "../../components/Button"; // Importe o componente FooterButtons

import { getLocal } from "@/services/storage";
import { getFilteredImage, getOriginImage } from "@/services/image";

export default function ResultsPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null); // URL da imagem original
  const [filteredImage, setFilteredImage] = useState<string | null>(null); // URL da imagem filtrada
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null); // Filtro selecionado

  // Recupera os dados do localStorage ao carregar a página
  useEffect(() => {
    const origin = getLocal("origin"); // Recupera a URL da imagem original
    const filtered = getLocal("filtered"); // Recupera a URL da imagem filtrada
    const filter = getLocal("filter"); // Recupera o filtro selecionado
    setOriginalImage(origin ? getOriginImage(origin) : null); // Define a URL da imagem original no estado
    setFilteredImage(filtered ? getFilteredImage(filtered) : null); // Define a URL da imagem filtrada no estado
    setSelectedFilter(filter); // Define o filtro selecionado no estado
  }, []);

  console.log(originalImage);
  console.log(filteredImage);
  console.log(selectedFilter);
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
            <h2 className="text-lg font-semibold mb-4 text-black">Imagem Original</h2>
            <div className="w-full h-96 bg-gray-400 rounded-lg flex items-center justify-center">
              {originalImage ? (
                <img
                  src={originalImage} // URL da imagem original
                  alt="Imagem Original"
                  className="w-full h-full object-cover rounded-lg"
                  width={500}
                  height={500}
                />
              ) : (
                <span>Carregando...</span> // Placeholder enquanto a imagem é carregada
              )}
            </div>
          </div>

          {/* Imagem com filtro aplicado */}
          <div className="flex flex-col items-center w-1/2 bg-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 text-black">Filtro Aplicado</h2>
            <div className="w-full h-96 bg-gray-400 rounded-lg flex items-center justify-center">
              {filteredImage ? (
                <img
                  src={filteredImage} // URL da imagem filtrada
                  alt="Imagem Filtrada"
                  className="w-full h-full object-cover rounded-lg"
                  width={500}
                  height={500}
                />
              ) : (
                <span>Carregando...</span> // Placeholder enquanto a imagem é carregada
              )}
            </div>
            {selectedFilter && (
              <p className="text-black text-lg font-semibold mt-4">
                Filtro: {selectedFilter}
              </p>
            )}
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