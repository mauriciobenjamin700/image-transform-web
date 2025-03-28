"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Ícone de seta para baixo
import {FILTERS} from "@/constants";

interface DropdownProps {
  onFilterChange: (filter: string) => void; // Prop para notificar o componente pai sobre a seleção
}

export default function Dropdown({ onFilterChange }: DropdownProps) {
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
    onFilterChange(option); // Notifica o componente pai sobre a seleção
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Label */}
      <label className="block mb-2 text-sm font-medium text-black">
        Selecionar filtro:
      </label>

      {/* Caixa com placeholder e botão */}
      <div
        className="flex items-center justify-between w-80 p-2 border border-gray-400 rounded-lg bg-white cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-gray-500">{selectedOption}</span>
        <FaChevronDown className="text-gray-500" />
      </div>

      {/* Menu suspenso */}
      {isOpen && (
        <div className="absolute mt-1 w-80 bg-white border border-gray-400 rounded-lg shadow-lg z-10">
          <ul className="py-2">
            <li
              onClick={() => handleOptionClick(FILTERS.BLUR)}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
            >
              borrado
            </li>
            <li
              onClick={() => handleOptionClick(FILTERS.GRAY)}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
            >
              cinza
            </li>
            
          </ul>
        </div>
      )}
    </div>
  );
}