import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaItem } from '../mock-media.service';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="media-wrapper" (mouseenter)="triggerHover(true)" (mouseleave)="triggerHover(false)">
      
      <!-- Thumbnail -->
      <img class="thumb" [src]="item.color" [alt]="item.title" />

      <!-- Hover Floating Card -->
      <div class="hover-card" [class.show]="hover">

        <video 
          class="hover-video" 
          muted autoplay loop playsinline 
          [src]="item.color">
        </video>

        <!-- Action Buttons -->
        <div class="hover-actions">
          <button class="btn icon">▶</button>
          <button class="btn icon">➕</button>
          <button class="btn icon">👍</button>
          <button class="btn icon">⬇</button>
        </div>

        <!-- Meta -->
        <div class="meta">
          <span class="badge" *ngIf="item.badge">{{ item.badge }}</span>
          <span class="rating" *ngIf="item.rating">{{ item.rating }}</span>
          <span *ngIf="item.seasons">{{ item.seasons }} Seasons</span>
        </div>

        <!-- Genres Row -->
        <div class="genres" *ngIf="item.genres?.length">
          <span *ngFor="let g of item.genres">• {{ g }}</span>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .media-wrapper {
      position: relative;
      width: 180px;
      height: 100px;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .thumb {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      object-fit: cover;
    }

    .hover-card {
      position: absolute;
      top: -80px;
      left: -50px;
      width: 320px;
      height: 300px;
      background: #181818;
      border-radius: 10px;
      transform: scale(0.5);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease, transform 0.25s ease;
      box-shadow: 0 8px 20px rgba(0,0,0,0.5);
      overflow: hidden;
      z-index: 20;
    }

    .hover-card.show {
      transform: scale(1);
      opacity: 1;
      pointer-events: auto;
    }

    .hover-video {
      width: 100%;
      height: 170px;
      object-fit: cover;
    }

    .hover-actions {
      display: flex;
      gap: 10px;
      padding: 10px;
      align-items: center;
    }

    .btn {
      background: #fff;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      border: none;
    }

    .meta {
      display: flex;
      gap: 10px;
      padding: 5px 12px;
      font-size: 14px;
    }

    .badge {
      color: #46d369;
      font-weight: bold;
    }

    .genres {
      padding: 6px 12px;
      color: #aaa;
      font-size: 13px;
    }
  `]
})
export class MediaCardComponent {
  @Input() item!: MediaItem;
  hover = false;

  triggerHover(state: boolean) {
    setTimeout(() => (this.hover = state), state ? 120 : 0);
  }
}
