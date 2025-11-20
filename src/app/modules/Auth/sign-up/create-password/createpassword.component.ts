import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "lib-createpassword.component",
  imports: [RouterLink , FormsModule],
  templateUrl: "./createpassword.component.html",
  styleUrl: "./createpassword.component.css",
})
export class CreatepasswordComponent {
 private _authService = inject(AuthService);
 private _router = inject(Router);
 userEmail = this._authService.userEmail

 onSubmit(email:string , password:string){
  const regisObj:{email:string , password:string} = {email , password}
  console.log(regisObj);
  
  this._authService.registerWithEmailAndPass(regisObj).subscribe({
    next:(res)=>{
      console.log(res);
      this._router.navigateByUrl("/signup/choose-plan")
    },
    error:(err)=>{console.log(err)},
    complete:()=>{console.log("completed");
    }
  })
 }
}
// routerLink=""