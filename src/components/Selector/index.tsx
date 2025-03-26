"use client";

import React, { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    console.log(`Opção selecionada: ${option}`);
    setIsOpen(false); // Fecha o menu após selecionar uma opção
  };

  return (
    <div className="relative inline-block text-left">
      {/* Botão principal */}
      <button
        onClick={toggleDropdown}
        className="bg-[#CEB863] text-black p-2 rounded-lg"
      >
        Selecione uma opção
      </button>

      {/* Menu suspenso */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
          <ul className="py-2">
            <li
              onClick={() => handleOptionClick("Opção 1")}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Opção 1
            </li>
            <li
              onClick={() => handleOptionClick("Opção 2")}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Opção 2
            </li>
            <li
              onClick={() => handleOptionClick("Opção 3")}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Opção 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}