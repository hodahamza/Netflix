import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Iplan } from '../interfaces/iplan';
import { ConfirmEmailRequest } from '../interfaces/iConfirmmail';


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
  confrmMail(credentials:ConfirmEmailRequest){
    return this.httpClient.post(`${this.BASE_URL}/api/Auth/confirm-signup` , credentials)
  }

  registerWithEmailAndPass(regsData:{email:string , password:string}){
    console.log("from auth service " , regsData);
    
   return this.httpClient.post(`${this.BASE_URL}/api/Auth/register`,regsData)
  }

  getAllPlans(){
    return this.httpClient.get<Iplan>(`${this.BASE_URL}/api/Subscription/plans`)
  }
  // subscripePlan(){
  //   this.httpClient.post(`${this.BASE_URL}`)
  // }

// * login EndPoints
   loginWithEmailAndPassword(loginData:{email:string , password:string}){
    console.log("from auth service" , loginData);
    
    return this.httpClient.post(`${this.BASE_URL}/api/Auth/login` , loginData)
   }
   requestOtp(email:string){
    return this.httpClient.post(`${this.BASE_URL}/api/Auth/request-otp` , {email})
   }

   loginWithOtp(logindata:{Email:string , Code:string}){
       return this.httpClient.post(`${this.BASE_URL}/api/Auth/login-otp` , logindata)
   }

}
