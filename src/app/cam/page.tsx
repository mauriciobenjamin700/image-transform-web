"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CameraPage() {
  const [photo, setPhoto] = useState<string | null>(null); // Estado para armazenar a foto capturada
  const videoRef = useRef<HTMLVideoElement>(null); // Referência para o elemento <video>
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null); // Referência para o fluxo da câmera
  const router = useRouter();

  // Inicia a câmera
  const startCamera = async () => {
    if (typeof navigator !== "undefined" && navigator.mediaDevices?.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream; // Armazena o fluxo da câmera
        if (videoRef.current) {
          videoRef.current.srcObject = stream; // Define o fluxo no elemento <video>
          videoRef.current.play(); // Reproduz o vídeo
        }
      } catch (error) {
        console.error("Erro ao acessar a câmera:", error);
      }
    } else {
      alert("A API getUserMedia não é suportada neste navegador. Por favor, use um navegador moderno como Google Chrome ou Firefox.");
    }
  };

  useEffect(() => {
    startCamera(); // Inicia a câmera ao carregar a página

    return () => {
      // Limpa o fluxo da câmera ao desmontar o componente
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null; // Remove a referência ao fluxo
      }
    };
  }, []);

  // Captura a foto
  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL("image/png");
        setPhoto(imageData); // Armazena a foto capturada
      }
    }
  };

  // Reinicia a câmera para tirar outra foto
  const retakePhoto = () => {
    setPhoto(null); // Remove a foto capturada
    startCamera(); // Reinicia a câmera
  };

  // Confirma a foto e redireciona para a página de seleção
  const confirmPhoto = () => {
    if (photo) {
      // Limpa o fluxo da câmera antes de navegar
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }

      localStorage.setItem("capturedPhoto", photo); // Salva a foto no localStorage
      router.push("/select-camera"); // Redireciona para a página select-camera
    }
  };

  // Voltar para a página principal
  const goBack = () => {
    // Limpa o fluxo da câmera antes de voltar
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    router.push("/"); // Redireciona para a página principal
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={goBack}
        className="absolute top-4 left-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
      >
        Voltar
      </button>
      {!photo ? (
        <>
          {/* Exibe o vídeo da câmera */}
          <video
            ref={videoRef}
            className="w-full max-w-md rounded-lg"
            autoPlay
            muted
          ></video>
          {/* Botão para tirar a foto */}
          <button
            onClick={takePhoto}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Tirar Foto
          </button>
          {/* Canvas oculto para capturar a imagem */}
          <canvas
            ref={canvasRef}
            className="hidden"
            width={640}
            height={480}
          ></canvas>
        </>
      ) : (
        <>
          {/* Exibe a foto capturada */}
          <Image
            src={photo || ""}
            alt="Foto capturada"
            className="w-full max-w-md rounded-lg"
            width={640}
            height={480}
          />
          <div className="flex gap-4 mt-4">
            {/* Botão para tirar outra foto */}
            <button
              onClick={retakePhoto}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Tirar Novamente
            </button>
            {/* Botão para confirmar a foto */}
            <button
              onClick={confirmPhoto}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Confirmar
            </button>
          </div>
        </>
      )}
    </main>
  );
}