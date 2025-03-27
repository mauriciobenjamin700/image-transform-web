"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Selector from "../../components/Selector";
import FooterButtons from "../../components/Button";

export default function SelectCameraPage() {
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    const capturedPhoto = localStorage.getItem("capturedPhoto"); // Recupera a foto do localStorage
    if (capturedPhoto) {
      setPhoto(capturedPhoto); // Define a foto capturada como a imagem selecionada
    }
  }, []);

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
          <Selector />
        </div>
      </div>

      {/* Botões abaixo do Selector */}
      <div className="w-full max-w-md px-4">
        <FooterButtons backRoute="/cam" saveRoute="/results" />
      </div>
    </main>
  );
}