export function saveLocal(key: string, value: string): void {
    try {
      // Salva o nome do arquivo no localStorage
      localStorage.setItem(key, value);
  
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }
export function getLocal(key: string): string | null {
    try {
      // Retorna o nome do arquivo do localStorage
      return localStorage.getItem(key);
  
    } catch (error) {
      console.error("Erro ao obter do localStorage:", error);
      return null;
    }
  }
export function removeLocal(key: string): void {
    try {
      // Remove o nome do arquivo do localStorage
      localStorage.removeItem(key);
  
    } catch (error) {
      console.error("Erro ao remover do localStorage:", error);
    }
  }