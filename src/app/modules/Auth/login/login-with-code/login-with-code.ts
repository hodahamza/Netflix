import { Component } from '@angular/core';
import { Login } from "../login";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login-with-code',
  imports: [Login, RouterLink],
  templateUrl: './login-with-code.html',
  styleUrl: './login-with-code.css',
})
export class LoginWithCode {

}
