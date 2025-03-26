"use client";

import React, { useState } from "react";

// Componente Dropdown
// Este componente renderiza um menu suspenso (dropdown) que permite ao usuário selecionar uma opção.
// Quando uma opção é selecionada, uma ação é executada com base na escolha do usuário.
export default function Dropdown() {
  // Estado para controlar se o menu suspenso está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado do menu suspenso (abrir/fechar)
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Inverte o estado atual de `isOpen`
  };

  // Função chamada ao selecionar uma opção
  const handleOptionClick = (option: string) => {
    console.log(`Opção selecionada: ${option}`); // Exibe a opção selecionada no console
    setIsOpen(false); // Fecha o menu suspenso
    performAction(option); // Executa uma ação com base na opção selecionada
  };

  // Função para executar uma ação com base na opção selecionada
  const performAction = (option: string) => {
    // Substitua esta lógica pela ação desejada
    alert(`Ação ativada para: ${option}`); // Exibe um alerta com a opção selecionada
  };

  return (
    <div className="relative inline-block text-left">
      {/* Botão principal */}
      {/* Este botão abre ou fecha o menu suspenso ao ser clicado */}
      <button
        onClick={toggleDropdown} // Chama a função para alternar o menu
        className="bg-[#CEB863] text-black p-2 rounded-lg"
      >
        Selelecione uma opção de filtro
      </button>

      {/* Menu suspenso */}
      {/* Renderizado apenas quando `isOpen` é verdadeiro */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
          <ul className="py-2">
            {/* Opção 1 */}
            <li
              onClick={() => handleOptionClick("Filtro 1")} // Chama a função ao clicar na opção
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer font-bold text-black"
            >
              Opção 1
            </li>

            {/* Opção 2 */}
            <li
              onClick={() => handleOptionClick("Filtro 2")} // Chama a função ao clicar na opção
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer font-bold text-black"
            >
              Opção 2
            </li>

            {/* Opção 3 */}
            <li
              onClick={() => handleOptionClick("Filtro 3")} // Chama a função ao clicar na opção
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer font-bold text-black"
            >
              Opção 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}