import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaSliderComponent } from '../media-slider/media-slider';
import { MockMediaService } from '../mock-media.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MediaSliderComponent],
  template: `
    <div class="home-page">
      <div class="hero">
        <div class="hero-content">
          <h1>Welcome to Netflix</h1>
          <p>Discover thousands of shows, movies, and games</p>
          <div class="hero-buttons">
            <button class="btn-primary">▶ Play</button>
            <button class="btn-secondary">ℹ More Info</button>
          </div>
        </div>
      </div>
      <div class="content">
        <app-media-slider title="Trending Now" [items]="(trending$ | async )|| []"></app-media-slider>
        <app-media-slider title="New Releases" [items]="(newReleases$ | async )|| []"></app-media-slider>
        <app-media-slider title="Continue Watching" [items]="(continueWatching$ | async )|| []"></app-media-slider>
      </div>
    </div>
  `,
  styles: [`
    .home-page {
      width: 100%;
    }
    .hero {
      height: 70vh;
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 20% 50%, rgba(229, 9, 20, 0.2), transparent 50%);
    }
    .hero-content {
      position: relative;
      z-index: 1;
      color: white;
      text-align: center;
      max-width: 600px;
      padding: 2rem;
    }
    .hero h1 {
      font-size: 3.5rem;
      font-weight: 900;
      margin: 0 0 1rem 0;
      letter-spacing: -1px;
    }
    .hero p {
      font-size: 1.2rem;
      margin: 0 0 2rem 0;
      color: #aaa;
    }
    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    .btn-primary {
      background: white;
      color: black;
      border: none;
      padding: 0.75rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .btn-primary:hover {
      background: rgba(255, 255, 255, 0.9);
      transform: scale(1.05);
    }
    .btn-secondary {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.5);
      padding: 0.75rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    .content {
      background: #0a0a0a;
      padding: 3rem 0;
    }
    @media (max-width: 768px) {
      .hero { height: 50vh; }
      .hero h1 { font-size: 2rem; }
      .hero p { font-size: 0.95rem; }
    }
  `],
})
export class HomeComponent {
  private media = inject(MockMediaService)
  trending$ = this.media.getTrendingShows();
  newReleases$ = this.media.getNewShows();
  continueWatching$ = this.media.getContinueWatching();

  constructor() {}
}