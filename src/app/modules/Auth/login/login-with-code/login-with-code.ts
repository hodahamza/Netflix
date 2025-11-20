import { Component, inject, OnDestroy } from '@angular/core';
import { Login } from "../login";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-with-code',
  imports: [RouterLink],
  templateUrl: './login-with-code.html',
  styleUrl: './login-with-code.css',
})
export class LoginWithCode implements OnDestroy{

 private  _authService = inject(AuthService);
 private _router = inject(Router)
subscription!: Subscription
 userEmail = this._authService.userEmail

 getCode(input:HTMLInputElement){
  console.log('form with code' , input.value);
  
 this.subscription = this._authService.requestOtp(input.value).subscribe({
    next:(res)=>{
      console.log(res)
      this._router.navigateByUrl("/login/otp")
    },
    error:(err)=>{console.log(err)
    }
  })
 }
  ngOnDestroy(): void {
  // this.subscription.unsubscribe()
 }
}
