import { Component, inject, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth";

@Component({
  selector: "lib-checkemail.component",
  imports: [RouterLink],
  templateUrl: "./checkemail.component.html",
  styleUrl: "./checkemail.component.css",
})
export class CheckemailComponent implements OnInit{
 
  authService = inject(AuthService);
  userEmail = this.authService.userEmail;

   ngOnInit(): void {
    // console.log(this.userEmail());
    // this.resendLink()
      
    
  }

  resendLink(){
  return  this.authService.sendEmail(this.userEmail()).subscribe({
    next:(res)=>{
      console.log("from check email ",res);
      
    },
    error:(err)=>{
      console.log("from check email ",err);
      
    },
    complete:()=>{console.log("completeed");
    }
   })
  }
}
