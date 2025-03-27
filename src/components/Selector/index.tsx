"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Ícone de seta para baixo

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/fechar o menu
  const [selectedOption, setSelectedOption] = useState("ex: Pixelização"); // Estado para a opção selecionada

  // Alternar o estado do menu suspenso
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Função chamada ao selecionar uma opção
  const handleOptionClick = (option: string) => {
    setSelectedOption(option); // Atualiza o texto na caixa
    setIsOpen(false); // Fecha o menu suspenso
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Label */}
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Selecionar filtro:
      </label>

      {/* Caixa com placeholder e botão */}
      <div
        className="flex items-center justify-between w-full p-2 border border-gray-300 rounded-lg bg-white cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-gray-500">{selectedOption}</span>
        <FaChevronDown className="text-gray-500" />
      </div>

      {/* Menu suspenso */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <ul className="py-2">
            <li
              onClick={() => handleOptionClick("Filtro 1")}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
            >
              Filtro 1
            </li>
            <li
              onClick={() => handleOptionClick("Filtro 2")}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
            >
              Filtro 2
            </li>
            <li
              onClick={() => handleOptionClick("Filtro 3")}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
            >
              Filtro 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}