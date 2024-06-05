import { Injectable } from '@nestjs/common';


interface SearchResult {
    // serach d'employé
    id:number;
    name: string;// name d'emploi 
    email: string; // email d' employe

  
  }
  @Injectable()
  export class SearchService {
    async searchEmploye(query: string): Promise<SearchResult[]> {
      // Logique de recherche asynchrone ici (par exemple, interroger une base de données)
      const results: SearchResult[] = await this.queryDatabase(query);
      return results;
    }
  
    // Méthode simulée pour interroger une base de données (remplacez-la par votre propre logique)
    private async queryDatabase(query: string): Promise<SearchResult[]> {
      // Simuler une requête à une base de données avec une réponse asynchrone
      return [
        { id: 1, name: 'nom 1', email: 'email du nom 1' },
        { id: 2, name: 'nom 2', email: 'email du nom 2' },
        { id: 3, name: 'nom  3', email: 'email du nom 3' },
      ];
    }
  }