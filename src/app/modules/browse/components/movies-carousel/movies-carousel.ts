import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Movie {
  id: number;
  title: string;
  img: string;
  video?: string;
  top10?: boolean;
  gold?: boolean;
  rating: string;
  duration: string;
  quality: string;
  tags: string[];
}

@Component({
  selector: 'app-movies-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-carousel.html',
  styleUrl: './movies-carousel.css',
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselTrack', { static: false }) carouselTrack!: ElementRef;

  movies: Movie[] = [
    { id: 1, title: 'اللعب مع العيال', img: 'https://picsum.photos/seed/movie1/300/170', video: 'https://www.w3schools.com/html/mov_bbb.mp4', rating: '13+', duration: '1h 50m', quality: 'HD', tags: ['كوميدي', 'دراما', 'عائلي'] },
    { id: 2, title: 'الدشاش', img: 'https://picsum.photos/seed/movie2/300/170', video: 'https://www.w3schools.com/html/mov_bbb.mp4', rating: '16+', duration: '2h 10m', quality: 'HD', tags: ['أكشن', 'جريمة', 'إثارة'] },
    { id: 3, title: 'Catalog', img: 'https://picsum.photos/seed/movie3/300/170', top10: true, video: 'https://www.w3schools.com/html/mov_bbb.mp4', rating: '13+', duration: '1h 30m', quality: 'HD', tags: ['Drama', 'Romance'] },
    { id: 4, title: 'الحريفة', img: 'https://picsum.photos/seed/movie5/300/170', gold: true, video: 'https://www.w3schools.com/html/mov_bbb.mp4', rating: '16+', duration: '2h 5m', quality: 'HD', tags: ['دراما', 'جريمة'] },
    { id: 5, title: 'أبو نسب', img: 'https://picsum.photos/seed/movie6/300/170', video: 'https://www.w3schools.com/html/mov_bbb.mp4', rating: '13+', duration: '1h 45m', quality: 'HD', tags: ['كوميدي', 'عائلي'] },
    { id: 6, title: 'الدشاش', img: 'https://picsum.photos/seed/movie2/300/170', video: 'https://www.w3schools.com/html/mov_bbb.mp4', rating: '16+', duration: '2h 10m', quality: 'HD', tags: ['أكشن', 'جريمة', 'إثارة'] },
    { id: 7, title: 'Catalog', img: 'https://picsum.photos/seed/movie3/300/170', top10: true, video: 'https://www.w3schools.com/html/mov_bbb.mp4', rating: '13+', duration: '1h 30m', quality: 'HD', tags: ['Drama', 'Romance'] },
    { id: 8, title: 'Finding Ola', img: 'https://picsum.photos/seed/movie4/300/170', video: 'https://www.w3schools.com/html/mov_bbb.mp4', rating: 'PG', duration: '45m', quality: 'HD', tags: ['Comedy', 'Drama'] },
    { id: 9, title: 'الحريفة', img: 'https://picsum.photos/seed/movie5/300/170', gold: true, video: 'https://www.w3schools.com/html/mov_bbb.mp4', rating: '16+', duration: '2h 5m', quality: 'HD', tags: ['دراما', 'جريمة'] },
    { id: 10, title: 'أبو نسب', img: 'https://picsum.photos/seed/movie6/300/170', video: 'https://www.w3schools.com/html/mov_bbb.mp4', rating: '13+', duration: '1h 45m', quality: 'HD', tags: ['كوميدي', 'عائلي'] },
  ];

  hoveredMovie: Movie | null = null;
  hoverTimeout: any;
  showVideo: boolean = false;
  private activeVideoElement: HTMLVideoElement | null = null;

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.cleanupVideo();
  }

  onMouseEnter(movie: Movie): void {
    this.hoveredMovie = movie;
    this.showVideo = false;

    this.hoverTimeout = setTimeout(() => {
      this.showVideo = true;
    }, 800);
  }

  onMouseLeave(): void {
    clearTimeout(this.hoverTimeout);

    this.showVideo = false;
    this.hoveredMovie = null;

    setTimeout(() => {
      this.cleanupVideo();
    }, 50);
  }

  onVideoLoaded(event: Event): void {
    if (this.activeVideoElement && this.activeVideoElement !== event.target) {
      this.activeVideoElement.pause();
      this.activeVideoElement.removeAttribute('src');
      this.activeVideoElement.load();
    }

    this.activeVideoElement = event.target as HTMLVideoElement;
  }

onVideoEnded(event: Event): void {
  this.showVideo = false;
  this.cleanupVideo();
}

  private cleanupVideo(): void {
    if (this.activeVideoElement) {
      const vid = this.activeVideoElement;
      vid.pause();
      vid.removeAttribute('src');
      vid.load();
      this.activeVideoElement = null;
    }
  }

  scroll(direction: 'left' | 'right'): void {
    const container = this.carouselTrack?.nativeElement;
    if (!container) return;

    const scrollAmount = 600;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }
}
