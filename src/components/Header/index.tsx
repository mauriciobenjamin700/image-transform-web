"use client";

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import uploadIcon from '../../assets/sair.svg';

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-[#00AAFF] text-white p-2 flex items-center relative w-full">
      {/* Texto centralizado */}
      <div className="absolute left-1/2 transform -translate-x-1/2  text-2xl font-semibold">
        ImageTransform
      </div>

      {/* Botão alinhado à direita */}
      <button
        onClick={() => router.push("/")} // Adiciona o evento de clique
        className="p-2 rounded-lg flex items-center ml-auto hover:shadow-lg hover:shadow-gray-500 transition-shadow"
      >
        <Image
          src={uploadIcon} // Utilize o ícone importado
          alt="Upload"
          width={30}
          height={30}
        />
      </button>
    </header>
  );
}