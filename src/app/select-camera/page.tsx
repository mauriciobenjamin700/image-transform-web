"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Selector from "../../components/Selector";
import FooterButtons from "../../components/Button";
import { useRouter } from "next/navigation";

export default function SelectCameraPage() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null); // Estado para o filtro selecionado
  const [isLoading, setIsLoading] = useState<boolean>(false); // Estado para controlar o overlay de carregamento
  const router = useRouter();

  useEffect(() => {
    const capturedPhoto = localStorage.getItem("capturedPhoto"); // Recupera a foto do localStorage
    if (capturedPhoto) {
      setPhoto(capturedPhoto); // Define a foto capturada como a imagem selecionada
    }
  }, []);

  const handleSave = () => {
    if (!photo) {
      alert("Por favor, capture uma foto antes de salvar.");
      return;
    }

    if (!selectedFilter) {
      alert("Por favor, selecione um filtro antes de salvar.");
      return;
    }

    setIsLoading(true); // Ativa o overlay de carregamento

    // Simula um pequeno atraso antes de redirecionar
    setTimeout(() => {
      setIsLoading(false); // Oculta o overlay após o processamento
      router.push("/results"); // Redireciona para a página de resultados
    }, 3000); // Tempo simulado de 3 segundos
  };

  return (
    <main className="flex flex-col items-center h-screen">
      <Header /> {/* Cabeçalho da página */}

      <div className="mt-8 text-lg font-semibold text-center text-black">
        Escolha o filtro para a sua foto
      </div>

      <div className="mt-4 w-full max-w-md flex flex-col gap-4">
        {photo ? (
          <Image
            src={photo}
            alt="Foto capturada"
            className="w-50 rounded-lg"
            width={500}
            height={500}
          />
        ) : (
          <div className="text-center text-gray-500">
            Nenhuma foto capturada.
          </div>
        )}

        {/* Selector para escolher o filtro */}
        <div className="w-full">
          <Selector onFilterChange={(filter: string) => setSelectedFilter(filter)} />
        </div>
      </div>

      {/* Botões abaixo do Selector */}
      <div className="w-full max-w-md px-4">
        <FooterButtons
          backRoute="/cam"
          saveAction={handleSave} // Passa a função handleSave para o botão "Salvar"
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