import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SpoonacularSearchResult {
  id: number;
  title: string;
  image: string;
}

export interface SpoonacularSearchResponse {
  results: SpoonacularSearchResult[];
}

@Injectable({
  providedIn: 'root',
})
export class SpoonacularService {
  private readonly apiKey = '70759a4f7911402abcc53d3c51d3b759'; // from the brief :contentReference[oaicite:1]{index=1}
  private readonly baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';

  constructor(private http: HttpClient) {}

  searchRecipes(query: string): Observable<SpoonacularSearchResponse> {
    return this.http.get<SpoonacularSearchResponse>(this.baseUrl, {
      params: {
        query,
        apiKey: this.apiKey,
      },
    });
  }
}
