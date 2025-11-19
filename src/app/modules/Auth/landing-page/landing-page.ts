import { Component, signal } from '@angular/core';
import { Header } from "../../header/header";
import { Carosuel } from "./carosuel/carosuel";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-landing-page',
  imports: [Header, Carosuel, RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  isExistEmail=signal<boolean>(false)
  constructor(private _authService:AuthService , private _router:Router){}

  onGetStartedClick(email:string){
    this._authService.setUserEmail(email);
    console.log(email);
    
    this.chekEmail(email)
    
  }
  chekEmail(email:string){
    this._authService.checkIfExistEmail(email).subscribe({
      next:(res:any)=> {
        console.log("from cjeck email",res.Message);
        
        if (res.Message==='User already exists, redirecting to login.') {
           this._router.navigateByUrl("/login")
        }else if(res.Message=='Proceeding with registration.'){          
          this._router.navigateByUrl("/signup/confirm-activation")
        }
      },
    })
  }
  //  routerLink="/signup/confirm-activation"
}
