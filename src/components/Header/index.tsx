"use client";

import Image from 'next/image';
import React from 'react';
import uploadIcon from '../../assets/saida.svg';

export default function Header() {
  const handleOpenAndCloseTab = () => {
    window.open('https://www.google.com');
    window.close(); // Fecha a aba atual
  };

  return (
    <header className="bg-[#00AAFF] text-white p-4 flex items-center relative w-full">
      {/* Texto centralizado */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold">
        ImageTransform
      </div>

      {/* Botão alinhado à direita */}
      <button
        onClick={handleOpenAndCloseTab} // Adiciona o evento de clique
        className="bg-white p-2 rounded-lg flex items-center ml-auto"
      >
        <Image
          src={uploadIcon} // Utilize o ícone importado
          alt="Upload"
          width={24}
          height={24}
        />
      </button>
    </header>
  );
}