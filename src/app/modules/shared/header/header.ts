import { Component, signal } from '@angular/core';
import { Buutton } from "../buutton/buutton";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [Buutton, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
