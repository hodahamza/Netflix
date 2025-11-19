import { Component } from '@angular/core';
import { Login } from "../login";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login-with-password',
  imports: [Login, RouterLink],
  templateUrl: './login-with-password.html',
  styleUrl: './login-with-password.css',
})
export class LoginWithPassword {

}
