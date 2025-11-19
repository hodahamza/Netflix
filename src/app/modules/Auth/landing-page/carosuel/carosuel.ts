import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarosuelCard } from "../carosuel-card/carosuel-card";

@Component({
  selector: 'app-carosuel',
  imports: [CarosuelCard , CommonModule],
  templateUrl: './carosuel.html',
  styleUrl: './carosuel.css',
  standalone:true
})
export class Carosuel {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  items = [
    { id: 1, title: 'Frankenstein', img: 'https://occ-0-6661-56.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXS9ktMpgkSECWpUPJMds7bt4-T9DQX3-SvQq2vG6fHbb8QcRaazw673JrWhvam2pB-_ixpAhCTo2CgE0eA0H8ttfPJKqzB7WoHDR5YWKjd4FthVuPI3WhgYHCws146iQhNb.webp?r=8f8' },
    { id: 2, title: 'The Witcher', img: 'https://occ-0-6661-56.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABS6j7tQZo3KGJ95ID4FHN8E_uruGIv2uOzdB4uwf57gPdosOKSDqHV66pTs4RYT3TTrF5VdcXWFU_gmGRvS6L2u2T6OyasUUfCbzfdPaI4j4s5eNTJpGBzxU1LENysUj91WG.webp?r=0af' },
    { id: 3, title: 'Sex/Life', img: 'https://occ-0-6661-56.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcaxAOO875GJCdVuF0m1TZ3t7bpSuHTJByPn3R_IUKqnTVM3S9XmcC4-g-Ep1TblyvtA-xEjnx4TKXkxqIX8uBSLvyp-xQUUyfntLLUhwqlyTdsAomLuue-Df9gov2xymJYy.webp?r=62a' },
    { id: 4, title: 'All For Me', img: 'https://occ-0-6661-56.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT--QQ4wqsTMWqkL6PgOy_oo2fHHQ4bFXtP1fEPAZz90nMu3qRQHp1v0eOYP5smMrCHZl1B7ZsgEdJHueVRy3sMN3naXuwV7WR9VrEtQ5ETXLljqiAcT1TeV3zw1bBrtT-m9.webp?r=f63' },
    { id: 5, title: 'Wednesday', img: 'https://occ-0-6661-56.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWrTjWMrsToh9vAoz8rKrhSSHdJW6bmhL8Lvv63zCy1lo3O1TFqvZH4U80xS1vDJJV00sc97Ntd2b1Y1vh3v4SIs60pAtWC6pottJ80j5h4ITJPEURiTJEH4O_a47L1S0qlG.webp?r=f17' },
    { id: 6, title: 'The Witcher', img: 'https://occ-0-6661-56.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABS6j7tQZo3KGJ95ID4FHN8E_uruGIv2uOzdB4uwf57gPdosOKSDqHV66pTs4RYT3TTrF5VdcXWFU_gmGRvS6L2u2T6OyasUUfCbzfdPaI4j4s5eNTJpGBzxU1LENysUj91WG.webp?r=0af' },
  ];

  scroll(direction: 'left' | 'right') {
    const container = this.scrollContainer.nativeElement;

    container.scrollBy({
      left: direction === 'right' ? 300 : -300,
      behavior: 'smooth'
    });
  }
}
