import { StorageService } from '../../shared/services/storageService/storage-service';

import { Component, signal } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Carosuel } from "./carosuel/carosuel";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../services/auth';
import { Buutton } from "../../shared/buutton/buutton";

@Component({
  selector: 'app-landing-page',
  imports: [Header, Carosuel, RouterLink, Buutton],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  isExistEmail=signal<boolean>(false)
  constructor(private _authService:AuthService , private _router:Router , private storageService:StorageService){}
  isEmptyEmail =signal<boolean>(false)
  isloading = signal<boolean>(false);
  isDisabled = signal<boolean>(false);

  onGetStartedClick(email:string ){
    this.storageService.saveEmail(email);
    if (email==='') {
      this.isEmptyEmail.set(true)
      return
    }else{
       this._authService.SetUserEmail(this.storageService.getEmail);
    console.log(email);
    
    this.chekEmail(email)
    }
   
    
  }
  chekEmail(email:string){
    this.isloading.set(true)
    this.isDisabled.set(true)
    this._authService.checkIfExistEmail(email).subscribe({
      next:(res:any)=> {
        console.log("from cjeck email",res.Message);
        
        if (res.Message==='User already exists, redirecting to login.') {
          
           this._router.navigateByUrl("/login")
        }else if(res.Message=='Proceeding with registration.'){          
          this._router.navigateByUrl("/signup/confirm-activation")
        }
      },
      error:(err)=>{
        console.log(err);
        
        this.isloading.set(false)
        this.isDisabled.set(false)
      },
      complete:()=>{
        this.isloading.set(false)
        this.isDisabled.set(false)
      }
    })
  }
  //  routerLink="/signup/confirm-activation"
}
