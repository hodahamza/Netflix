import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <a routerLink="/" class="logo">NETFLIX</a>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a></li>
          <li><a routerLink="/tvshows" routerLinkActive="active">TV Shows</a></li>
          <li><a routerLink="/movies" routerLinkActive="active">Movies</a></li>
          <li><a routerLink="/games" routerLinkActive="active">Games</a></li>
        </ul>
        <div class="nav-right">
          <div class="avatar">👤</div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: rgba(20, 20, 20, 0.95);
      backdrop-filter: blur(10px);
      padding: 0.75rem 0;
      position: sticky;
      top: 0;
      z-index: 1000;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .navbar-container {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
    }
    .logo {
      font-size: 1.8rem;
      font-weight: 900;
      color: #e50914;
      text-decoration: none;
      letter-spacing: -2px;
    }
    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }
    .nav-links a {
      color: #fff;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.3s ease;
    }
    .nav-links a:hover,
    .nav-links a.active {
      color: #e50914;
    }
    .avatar {
      width: 2.5rem;
      height: 2.5rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    .avatar:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    @media (max-width: 768px) {
      .navbar-container { padding: 0 1rem; }
      .nav-links { gap: 1rem; font-size: 0.85rem; }
      .logo { font-size: 1.4rem; }
    }
  `],
})
export class NavbarComponent {}