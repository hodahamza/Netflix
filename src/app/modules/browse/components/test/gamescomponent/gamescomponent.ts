import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaSliderComponent } from '../media-slider/media-slider';
import { MockMediaService } from '../mock-media.service';
@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, MediaSliderComponent],
  template: `
    <div class="page">
      <div class="page-header">
        <h1>Games</h1>
      </div>
      <div class="page-content">
        <app-media-slider title="Popular Mobile Games" [items]="(popular$ | async) || []"></app-media-slider>
        <app-media-slider title="New Games" [items]="(newGames$ | async) || []"></app-media-slider>
        <app-media-slider title="Pick Up and Play" [items]="(casual$ | async) || []"></app-media-slider>
      </div>
    </div>
  `,
  styles: [`
    .page { background: #0a0a0a; min-height: 100vh; }
    .page-header {
      background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
      padding: 4rem 2rem;
      color: white;
    }
    .page-header h1 {
      font-size: 2.5rem;
      margin: 0;
    }
    .page-content { padding: 3rem 0; }
    @media (max-width: 768px) {
      .page-header { padding: 2rem 1rem; }
      .page-header h1 { font-size: 1.8rem; }
    }
  `],
})
export class GamesComponent {
  private media = inject(MockMediaService)
  popular$ = this.media.getPopularGames();
  newGames$ = this.media.getNewGames();
  casual$ = this.media.getCasualGames();

  constructor() {}
}