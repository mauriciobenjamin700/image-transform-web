// components/CenteredButtons.jsx
import Image from 'next/image';
import React from 'react';
import icon1 from '../assets/icon1.png'; // Importe a primeira imagem
import icon2 from '../assets/icon2.png'; // Importe a segunda imagem

export default function CenteredButtons() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex gap-8">
        {/* Botão 1 */}
        <div className="flex flex-col items-center">
          <button className="bg-[#CEB863] p-4 rounded-lg">
            <Image src={icon1} alt="Icon 1" width={50} height={50} />
          </button>
          <label className="mt-2 text-black">Botão 1</label>
        </div>

        {/* Botão 2 */}
        <div className="flex flex-col items-center">
          <button className="bg-[#CEB863] p-4 rounded-lg">
            <Image src={icon2} alt="Icon 2" width={50} height={50} />
          </button>
          <label className="mt-2 text-black">Botão 2</label>
        </div>
      </div>
    </div>
  );
}
