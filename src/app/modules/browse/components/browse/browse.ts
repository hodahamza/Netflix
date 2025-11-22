import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { CarouselComponent } from "../movies-carousel/movies-carousel";

@Component({
  selector: 'app-browse',
  imports: [Navbar, CarouselComponent],
  templateUrl: './browse.html',
  styleUrl: './browse.css',
})
export class Browse {

}
