import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../models/film';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  recupera() {
    return this.http.get<Movies[]>(`${this.apiURL}/movies-popular`);
  }

  aggiungiPreferiti(data: Movies) {
    return this.http.post<Movies>(
      `${this.apiURL}favorites, {userId, movieId}`,
      data
    );
  }

  getMoviePosterUrl(posterPath: string | null): string {
    const imageUrl = posterPath
      ? `${this.apiURL}${posterPath}`
      : 'path_to_default_image';
    console.log('Image URL:', imageUrl);
    return imageUrl;
  }
}
