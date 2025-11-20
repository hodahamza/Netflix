import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-otp',
  imports: [RouterLink],
  templateUrl: './otp.html',
  styleUrl: './otp.css',
})
export class OTP {
  private router = inject(Router)
  private _authService = inject(AuthService)
  userEmail = this._authService.userEmail

  onSignIn(first:string , second:string , third:string , forth:string){
    const code = first+second+third+forth;
    const loginWihtOtp ={
      Email:this.userEmail(),
      Code:code
    }
    console.log(loginWihtOtp);
    
    this._authService.loginWithOtp(loginWihtOtp).subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigate(['/home'])
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  resendCode(){
    this._authService.requestOtp(this.userEmail()).subscribe({
      next:(res)=>{
        console.log(res)
        //* hna lw return sucess ==> haroo7 ll home page
        //* hna lw return failed ==>  return w atla3 resala ll user
      },
      error:(err)=>{console.log(err)
      },
      complete:()=>{console.log("completed");
      }
    })
  }
}
