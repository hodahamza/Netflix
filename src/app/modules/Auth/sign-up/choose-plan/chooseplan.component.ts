import { StorageService } from '../../../shared/services/storageService/storage-service';
import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth";
import { ConfirmEmailRequest } from "../../interfaces/iConfirmmail";
import { log } from 'node:console';

@Component({
  selector: "lib-chooseplan.component",
  imports: [RouterLink],
  templateUrl: "./chooseplan.component.html",
  styleUrl: "./chooseplan.component.css",
})
export class ChooseplanComponent {
  private route = inject(ActivatedRoute);
    private authService = inject(AuthService);
    private StorageService = inject(StorageService);


   email = signal<string | null>(null);
  token = signal<string | null>(null);
  
  constructor(){
    
    
     const queryParams = this.route.snapshot.queryParamMap;
    this.email.set(queryParams.get('email'));
    this.token.set(queryParams.get('token'));
    // console.log(this.email());
    

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
        console.log("from confirm plan sucess",res);
        console.log(res.Data?.AccessToken);
        
        this.StorageService.saveAccessToken(res.Data?.AccessToken as string)
        this.StorageService.saveRefrechToken((res.Data?.RefreshToken) as string)
        console.log('access token',this.StorageService.getAccessToken);
        console.log('refToken',this.StorageService.getRefToken);
        

      },error:(err)=>{
        console.log('error from  confirm plan',err);
        
      }
    })
  }
}
