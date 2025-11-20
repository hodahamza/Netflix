import { Component, inject } from '@angular/core';

import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login-with-password',
  imports: [ RouterLink , FormsModule],
  templateUrl: './login-with-password.html',
  styleUrl: './login-with-password.css',
})
export class LoginWithPassword {
  private _authService = inject(AuthService)
  userEmail = this._authService.userEmail

  onSubmit(email:string , password:string){
    console.log("from logTS" ,email , password);
   const loginData = {email,password}
   this._authService.loginWithEmailAndPassword(loginData).subscribe({
    next:(res)=>{console.log(res)
    },
    error:(err)=>{console.log(err)
    },
    complete:()=>{console.log("completed")
    }
   })

    
  }
}
