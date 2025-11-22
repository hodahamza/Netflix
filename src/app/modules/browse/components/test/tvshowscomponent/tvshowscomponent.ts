import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaSliderComponent } from '../media-slider/media-slider';
import { MockMediaService } from '../mock-media.service';
import { Navbar } from "../../navbar/navbar";

@Component({
  selector: 'app-tv-shows',
  standalone: true,
  imports: [CommonModule, MediaSliderComponent],
  template: `
    <div class="page">
      <div class="page-header">
        <h1>TV Shows</h1>
      </div>
      <div class="page-content">
        <app-media-slider title="Trending Shows" [items]="(trending$ | async) || []"></app-media-slider>
        <app-media-slider title="New Releases" [items]="(newReleases$ | async) || []"></app-media-slider>
        <app-media-slider title="Popular in Egypt" [items]="(popular$ | async) || []"></app-media-slider>
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
export class TvShowsComponent {
  private media = inject(MockMediaService)
  trending$ = this.media.getTrendingShows();
  newReleases$ = this.media.getNewShows();
  popular$ = this.media.getContinueWatching();

  constructor() {}
}
