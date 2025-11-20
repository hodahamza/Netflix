import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth";
import { ConfirmEmailRequest } from "../../interfaces/iConfirmmail";

@Component({
  selector: "lib-chooseplan.component",
  imports: [RouterLink],
  templateUrl: "./chooseplan.component.html",
  styleUrl: "./chooseplan.component.css",
})
export class ChooseplanComponent {
  private route = inject(ActivatedRoute);
    private authService = inject(AuthService);


   email = signal<string | null>(null);
  token = signal<string | null>(null);
  
  constructor(){
    console.log(123);
    
     const queryParams = this.route.snapshot.queryParamMap;
    this.email.set(queryParams.get('email'));
    this.token.set(queryParams.get('token'));
    console.log(this.email());
    

    if(this.email() && this.token()){
      this.confirmMail()
    }
  }
  confirmMail(){
    const confirmMailRequest:ConfirmEmailRequest={
      email:this.email() as string,
      token:this.token() as string 
    }
    console.log(confirmMailRequest);
    
    this.authService.confrmMail(confirmMailRequest).subscribe({
      next:(res)=>{
        console.log(res);
        
      },error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
