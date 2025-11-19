
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carosuel-card',
  imports: [],
  templateUrl: './carosuel-card.html',
  styleUrl: './carosuel-card.css',
})
export class CarosuelCard {

  @Input({required:true}) item:any
}
