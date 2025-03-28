import { ImageResponse } from "@/schemas";
import { getLocal, saveLocal } from "@/services/storage";

export function saveResults(response: ImageResponse): void {
    saveLocal("filtered", response.filtered_url); // Salva a URL da imagem filtrada no localStorage
    saveLocal("origin", response.origin_url); // Salva a URL da imagem original no localStorage
    saveLocal("filter", response.filter_applied); // Salva o filtro selecionado no localStorage
    saveLocal("name", response.name); // Salva o nome da imagem no localStorage
    saveLocal("id", response.id); // Salva o ID da imagem no localStorage
    saveLocal("created_at", response.created_at); // Salva a data de criação da imagem no localStorage
    saveLocal("updated_at", response.updated_at); // Salva a data de atualização da imagem no localStorage
    saveLocal("filter_applied", response.filter_applied); // Salva o filtro aplicado na imagem no localStorage
    saveLocal("origin_url", response.origin_url); // Salva a URL da imagem original no localStorage
    saveLocal("filtered_url", response.filtered_url); // Salva a URL da imagem filtrada no localStorage
    
}

export function getResults(): ImageResponse | null {
    const origin = getLocal("origin"); // Recupera a URL da imagem original
    const filtered = getLocal("filtered"); // Recupera a URL da imagem filtrada
    const filter = getLocal("filter"); // Recupera o filtro selecionado
    const name = getLocal("name"); // Recupera o nome da imagem
    const id = getLocal("id"); // Recupera o ID da imagem
    const created_at = getLocal("created_at"); // Recupera a data de criação da imagem
    const updated_at = getLocal("updated_at"); // Recupera a data de atualização da imagem
    const filter_applied = getLocal("filter_applied"); // Recupera o filtro aplicado na imagem
    const origin_url = getLocal("origin_url"); // Recupera a URL da imagem original
    const filtered_url = getLocal("filtered_url"); // Recupera a URL da imagem filtrada


    if (!origin || !filtered || !filter || !name || !id || !created_at || !updated_at || !filter_applied || !origin_url || !filtered_url) {
        return null;
    }

    return {
        origin_url,
        filtered_url,
        filter_applied,
        created_at,
        updated_at,
        id,
        name
    };
}