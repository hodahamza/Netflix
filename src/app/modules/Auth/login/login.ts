import { Component, ViewEncapsulation } from '@angular/core';
import { Footer } from "../../shared/footer/footer";
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [Footer, RouterLink, RouterOutlet],
  encapsulation: ViewEncapsulation.None
})
export class Login {

}
