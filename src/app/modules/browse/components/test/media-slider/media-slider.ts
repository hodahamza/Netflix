import { Component, Input, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCardComponent } from '../media-card/media-card';
import { MediaItem } from '../mock-media.service';
@Component({
  selector: 'app-media-slider',
  standalone: true,
  imports: [CommonModule, MediaCardComponent],
  template: `
    <div class="slider-section">
      <h2 class="slider-title">{{ title }}</h2>
      <div class="slider-container">
        <button class="arrow left" (click)="scroll(-600)" aria-label="Scroll left">‹</button>
        <div class="slider-wrapper" #wrapper>
          <div class="slider-track">
            <app-media-card *ngFor="let item of items" [item]="item" class="slider-item"></app-media-card>
          </div>
        </div>
        <button class="arrow right" (click)="scroll(600)" aria-label="Scroll right">›</button>
      </div>
    </div>
  `,
  styles: [`
    .slider-section {
      margin-bottom: 4rem;
    }
    .slider-title {
      color: white;
      font-size: 1.3rem;
      font-weight: 700;
      margin: 0 0 1.5rem 0;
      padding: 0 2rem;
    }
    .slider-container {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0 2rem;
    }
    .slider-wrapper {
      flex: 1;
      overflow: hidden;
      border-radius: 0.5rem;
    }
    .slider-track {
      display: flex;
      gap: 0.8rem;
      scroll-behavior: smooth;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .slider-track::-webkit-scrollbar {
      display: none;
    }
    .slider-item {
      flex: 0 0 calc(16.66% - 0.67rem);
      min-width: 140px;
    }
    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.6);
      color: white;
      border: none;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      font-size: 1.5rem;
      cursor: pointer;
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    .arrow:hover {
      background: rgba(0, 0, 0, 0.9);
      transform: translateY(-50%) scale(1.1);
    }
    .arrow.left {
      left: 0;
    }
    .arrow.right {
      right: 0;
    }
    @media (max-width: 1200px) {
      .slider-item {
        flex: 0 0 calc(20% - 0.64rem);
      }
    }
    @media (max-width: 768px) {
      .slider-item {
        flex: 0 0 calc(33.33% - 0.53rem);
      }
      .slider-title {
        font-size: 1rem;
        padding: 0 1rem;
      }
      .slider-container {
        padding: 0 1rem;
      }
    }
    @media (max-width: 480px) {
      .slider-item {
        flex: 0 0 calc(50% - 0.4rem);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaSliderComponent {
  @Input() title!: string;
  @Input() items: MediaItem[] = [];
  @ViewChild('wrapper') wrapper!: ElementRef;

  scroll(distance: number) {
    const track = this.wrapper.nativeElement.querySelector('.slider-track');
    if (track) {
      track.scrollBy({ left: distance, behavior: 'smooth' });
    }
  }
}
