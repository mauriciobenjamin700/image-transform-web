import Image from "next/image";
import Header from "../components/Header"; // Importe o Header
import icon1 from "../assets/camera.svg";
import icon2 from "../assets/galeria.svg";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F7E2AB] w-full">
      {/* Header */}
      <Header />

      {/* Botões abaixo do Header */}
      <div className="flex flex-col items-center justify-center h-screen gap-8">
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
    </div>
  );
}

