import Header from "../../components/Header"; // Importe o componente Header
import Selector from "../../components/Selector"; // Importe o componente Selector
import FooterButtons from "../../components/Button"; // Importe o componente FooterButtons

export default function SelectPage() {
  return (
    <main className="flex flex-col items-center h-screen">
      <Header /> {/* Cabeçalho da página */}

      {/* Texto abaixo do Header */}
      <div className="mt-8 text-lg font-semibold text-center text-black">
        Escolha sua imagem!
      </div>

      {/* Barra de pesquisa com botão */}
      <div className="mt-4 w-full max-w-md px-4 flex flex-col gap-4">
        {/* Search bar */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Digite o nome da imagem..."
            className="w-full p-2 border border-black rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            Confirmar
          </button>
        </div>

        {/* Selector alinhado à esquerda */}
        <div className="w-full">
          <Selector /> {/* Use o componente Selector */}
        </div>
      </div>

      {/* Botões abaixo do Selector */}
      <div className="w-full max-w-md px-4">
        <FooterButtons /> {/* Use o componente FooterButtons */}
      </div>
    </main>
  );
}