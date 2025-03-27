"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // Para navegação programática
import Header from "../../components/Header"; // Importe o Header
import icon1 from "../../assets/camera.svg";
import icon2 from "../../assets/galeria.svg";

export default function Home() {
  const router = useRouter();

  const handleNavigateToCamera = () => {
    router.push("/cam"); // Atualizado para a rota correta da página de câmera
  };

  const handleNavigateToGallery = () => {
    router.push("/select"); // Rota para a página da seleção da galeria
  };

  return (
    
    <div className="flex flex-col bg-[#F7E2AB] w-full">
      {/* Header */}
      <Header />
      <div className="mt-30 text-lg font-semibold text-center text-gray-800">
        Escolha uma das opções para adicionar filtro em sua imagem: 
      </div>
      {/* Botões abaixo do Header */}
      <div className="mt-20 flex flex-col items-center justify-center  gap-8">
        <div className="flex gap-20 ">
          {/* Botão 1 */}
          <div className="flex flex-col items-center ">
            <button
              onClick={handleNavigateToCamera}
              className="bg-[#CEB863] p-8 rounded-lg ml-auto hover:shadow-lg hover:shadow-gray-800 transition-shadow"
            >
              <Image src={icon1} alt="Icon 1" width={50} height={50} />
            </button>
            <label className="mt-2 text-black text-center">Tirar foto</label>
          </div>

          {/* Botão 2 */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleNavigateToGallery}
              className="bg-[#CEB863] p-8 rounded-lg ml-auto hover:shadow-lg hover:shadow-gray-800 transition-shadow"
            >
              <Image src={icon2} alt="Icon 2" width={50} height={50} />
            </button>
            <label className="mt-2 text-black text-center">Abrir galeria</label>
          </div>
        </div>
      </div>
    </div>
  );
}
