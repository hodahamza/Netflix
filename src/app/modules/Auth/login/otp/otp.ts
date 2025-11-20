import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-otp',
  imports: [RouterLink],
  templateUrl: './otp.html',
  styleUrl: './otp.css',
})
export class OTP {
  private _authService = inject(AuthService)
  userEmail = this._authService.userEmail

  onSignIn(first:string , second:string , third:string , forth:string){
    const code = first+second+third+forth;
    console.log(code);
    
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
