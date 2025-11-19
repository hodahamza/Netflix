import { Component, inject, OnInit } from "@angular/core";
import {  Router } from "@angular/router";
import { AuthService } from "../../services/auth";


@Component({
  selector: "lib-confirm-activation",
  // imports: [RouterLink],
  templateUrl: "./confirmActivation.component.html",
  styleUrl: "./confirmActivation.component.css",
})
export class ConfirmActivationComponent implements OnInit{

  private _authService = inject(AuthService);
  private _router = inject(Router);
  
  userEmail  = this._authService.userEmail;


    ngOnInit(): void {
    console.log("from confirm activation", this.userEmail());
    
  }

  sendEmail(){
    this._authService.sendEmail(this.userEmail()).subscribe({
      next:(res)=>{console.log(res)},
      error:(err)=>{console.log(err)},
    });
    this._router.navigateByUrl("/signup/check-email")

  }

}
