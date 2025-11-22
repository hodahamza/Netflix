export interface MediaItem {
  id: string;
  title: string;
  year: number;
  description: string;
  color: string;
  type: 'movie' | 'show' | 'game';
  badge?: string;
  rating?: string;
  seasons?: number;
  genres?: string[];
}

// services/mock-media.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MockMediaService {
 private generateMedia(type: 'movie' | 'show' | 'game', category: string, count = 12): MediaItem[] {
    const titles = {
      show: ['Stranger Things', 'Breaking Bad', 'The Crown', 'Squid Game', 'Bridgerton', 'Narcos', 'Dark', 'The Witcher', 'Ozark', 'Dexter', 'Peaky Blinders', 'Chernobyl'],
      movie: ['Oppenheimer', 'Barbie', 'Parasite', 'Inception', 'The Matrix', 'Dune', 'Gladiator', 'Avatar', 'Interstellar', 'Titanic', 'The Dark Knight', 'Pulp Fiction'],
      game: ['WWE 2K25', 'Football Manager', 'GTA San Andreas', 'Street Fighter IV', 'Asphalt Xtreme', 'Storyteller', 'Squid Game', 'Solitaire', 'Cut the Rope', 'Pinball', 'Word Trails', 'Sonic Dash'],
    };

    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2', '#FF8A65', '#64B5F6', '#81C784', '#FFD54F'];
    const genres = {
      show: ['Thriller', 'Drama', 'Sci-Fi', 'Mystery', 'Horror', 'Crime'],
      movie: ['Action', 'Drama', 'Sci-Fi', 'Thriller', 'Adventure', 'Fantasy'],
    };

    return Array.from({ length: count }).map((_, i) => ({
      id: `${type}-${category}-${i}`,
      title: titles[type][i % titles[type].length],
      year: 2020 + (i % 5),
      description: type !== 'game' ? 'Award-winning content with unforgettable storytelling' : 'Immersive gaming experience',
      color: colors[i % colors.length],
      type,
      badge: i % 3 === 0 ? 'New' : i % 5 === 0 ? 'Top 10' : i % 7 === 0 ? 'Leaving Soon' : undefined,
      rating: type !== 'game' ? ['PG', 'PG-13', '15', '18'][i % 4] : undefined,
      seasons: type === 'show' ? [3, 4, 5, 6, 7, 8][i % 6] : undefined,
      genres: type !== 'game' ? [genres[type][i % genres[type].length], genres[type][(i + 1) % genres[type].length]] : undefined,
    }));

  }
   getTrendingShows(): Observable<MediaItem[]> {
    return of(this.generateMedia('show', 'trending'));
  }

  getNewShows(): Observable<MediaItem[]> {
    return of(this.generateMedia('show', 'new'));
  }

  getContinueWatching(): Observable<MediaItem[]> {
    return of(this.generateMedia('show', 'continue'));
  }

  getPopularMovies(): Observable<MediaItem[]> {
    return of(this.generateMedia('movie', 'popular'));
  }

  getTopMovies(): Observable<MediaItem[]> {
    return of(this.generateMedia('movie', 'top'));
  }

  getActionMovies(): Observable<MediaItem[]> {
    return of(this.generateMedia('movie', 'action'));
  }

  getPopularGames(): Observable<MediaItem[]> {
    return of(this.generateMedia('game', 'popular'));
  }

  getNewGames(): Observable<MediaItem[]> {
    return of(this.generateMedia('game', 'new'));
  }

  getCasualGames(): Observable<MediaItem[]> {
    return of(this.generateMedia('game', 'casual'));
  }
}