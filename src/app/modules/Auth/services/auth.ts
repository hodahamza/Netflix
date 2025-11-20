import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Iplan } from '../interfaces/iplan';
import { StorageService } from '../../services/storageService/storage-service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private storageService =inject(StorageService)
  private BASE_URL = "https://localhost:7263"
  private  _userEmail =signal<string>(`${this.storageService.getEmail}`);
  userEmail =  this._userEmail.asReadonly();

   
  

  private httpClient = inject(HttpClient)

  SetUserEmail(email:string){
    this._userEmail.set(email);
    
  }

  // saveUserEmail(){
    
  // }

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

   loginWithOtp(logindata:{email:string , code:string}){
       return this.httpClient.post(`${this.BASE_URL}/api/Auth/login-otp` , logindata)
   }

}
