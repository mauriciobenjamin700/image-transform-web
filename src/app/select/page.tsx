"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Para redirecionar o usuário
import Header from "../../components/Header"; // Importe o componente Header
import Selector from "../../components/Selector"; // Importe o componente Selector
import FooterButtons from "../../components/Button"; // Importe o componente FooterButtons

export default function SelectPage() {
  const [selectedFile, setSelectedFile] = useState<string>(""); // Estado para o arquivo selecionado
  const [isLoading, setIsLoading] = useState<boolean>(false); // Estado para controlar o overlay de carregamento
  const router = useRouter(); // Hook para redirecionar o usuário

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0].name); // Atualiza o nome do arquivo selecionado
    }
  };

  const handleSave = () => {
    if (!selectedFile) {
      alert("Por favor, selecione uma imagem antes de salvar.");
      return;
    }

    // Exibe o overlay de carregamento
    setIsLoading(true);

    // Simula o tempo de processamento do filtro
    setTimeout(() => {
      setIsLoading(false); // Oculta o overlay após o processamento
      router.push("/results"); // Redireciona para a página de resultados
    }, 3000); // Tempo simulado de 3 segundos
  };

  return (
    <main className="flex flex-col items-center h-screen">
      <Header /> {/* Cabeçalho da página */}

      {/* Texto abaixo do Header */}
      <div className="mt-8 text-lg font-semibold text-center text-black">
        Escolha a sua imagem para aplicar um filtro
      </div>

      {/* Seletor de arquivo */}
      <div className="mt-4 w-full max-w-md flex flex-col gap-4">
        <div className="flex items-center w-full border border-black rounded-lg bg-white focus-within:outline-none">
          <input
            type="text"
            placeholder="Selecione o arquivo..."
            value={selectedFile}
            readOnly
            className="flex-1 bg-transparent text-black focus:outline-none"
          />
          <label className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer text-center ml-2">
            Escolher arquivo
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Selector alinhado à esquerda */}
        <div className="w-full">
          <Selector /> {/* Use o componente Selector */}
        </div>
      </div>

      {/* Botões abaixo do Selector */}
      <div className="w-full max-w-md px-4">
        <FooterButtons
          backRoute="/"
          saveRoute="/results"
    saveAction={handleSave}
  />
      </div>

      {/* Overlay de carregamento */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-white">Processando...</p>
          </div>
        </div>
      )}
    </main>
  );
}