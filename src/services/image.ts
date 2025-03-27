import { API_URL } from "@/constants";
import { ImageResponse } from "@/schemas";

export async function uploadImage(file: File, filter: string): Promise<ImageResponse> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${API_URL}/image/${filter}`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar o arquivo.");
    }

    // Parseia a resposta JSON para o tipo ImageResponse
    const data = await response.json();
    return data as ImageResponse;

  } catch (error) {
    console.error(error);
    throw new Error("Ocorreu um erro ao salvar a imagem.");
  }
}

export function getOriginImage(origin_url : string){
    return `${API_URL}${origin_url}`;
}

export function getFilteredImage(filtered_url : string){
    return `${API_URL}${filtered_url}`;
}
    