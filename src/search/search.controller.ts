import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('searchEmploye')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async searchEmploy(@Query('q') query: string): Promise<string[]> {
    // Appeler la méthode de recherche du service
    const results = await this.searchService.searchEmploye(query);
    // Formater les résultats en tant que tableau de chaînes
    return results.map(result => result.toString());
  }
}
