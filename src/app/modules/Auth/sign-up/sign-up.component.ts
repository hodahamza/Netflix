import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: "lib-sign-in",
  imports: [HeaderComponent, RouterModule, FooterComponent],
  templateUrl: "./sign-up.component.html",
  styleUrl: "./sign-up.component.css",
})
export class SignIn {}
