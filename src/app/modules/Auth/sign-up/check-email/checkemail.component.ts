import { Component, inject, OnInit, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth";
import { Buutton } from "../../../shared/buutton/buutton";

@Component({
  selector: "lib-checkemail.component",
  imports: [RouterLink, Buutton],
  templateUrl: "./checkemail.component.html",
  styleUrl: "./checkemail.component.css",
})
export class CheckemailComponent implements OnInit{
 
  authService = inject(AuthService);
  userEmail = this.authService.userEmail;
  notificationMsg  = signal<string>('') 
   isloading = signal<boolean>(false);
  isDisabled = signal<boolean>(false);
   ngOnInit(): void {
    // console.log(this.userEmail());
    // this.resendLink()
      
    
  }

  resendLink(){
    this.isloading.set(true);
    this.isDisabled.set(true)
  return  this.authService.sendEmail(this.userEmail()).subscribe({
    next:(res)=>{
      this.notificationMsg.set(res.Message) 
      console.log("from check email ",this.notificationMsg());
    },
    error:(err)=>{
      console.log("from check email ",err);
       this.isloading.set(false);
    this.isDisabled.set(false)
      
    },
    complete:()=>{
       this.isloading.set(false);
    this.isDisabled.set(false)
      console.log("completeed");
    }
   })
  }
}
