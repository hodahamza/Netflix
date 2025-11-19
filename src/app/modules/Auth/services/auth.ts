import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Iplan } from '../interfaces/iplan';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = "https://localhost:7263"
  private  _userEmail =signal<string>("");
  userEmail =  this._userEmail.asReadonly();

  private httpClient = inject(HttpClient)

  setUserEmail(email:string){
    this._userEmail.set(email);
  }


  sendEmail(email:string){
  return this.httpClient.post(`${this.BASE_URL}/api/Auth/send-magic-link` , {email})
  }

  checkIfExistEmail(email:string){
    return this.httpClient.post(`${this.BASE_URL}/api/Auth/check-email` , {email})
  }

  registerWithEmailAndPass(regsData:{email:string , password:string}){
    console.log("from auth service " , regsData);
    
   return this.httpClient.post(`${this.BASE_URL}/api/Auth/register`,regsData)
  }
   getAllPlans(){
    return this.httpClient.get<Iplan>(`${this.BASE_URL}/api/Subscription/plans`)
   }
}
