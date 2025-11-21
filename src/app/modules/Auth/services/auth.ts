import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import {  Iplanresponse } from '../interfaces/iplan';
import { ConfirmEmailRequest, ConfirmEmailResponse } from '../interfaces/iConfirmmail';
import { Imail } from '../interfaces/imail';

import { StorageService } from '../../shared/services/storageService/storage-service';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private storageService =inject(StorageService)
  private BASE_URL = "https://localhost:7263"
  private  _userEmail =signal<string>(`${this.storageService.getEmail}`);
  private _userToken = signal<string>(`${this.storageService.getAccessToken}`)
  private _RefToken = signal<string>(`${this.storageService.getRefToken}`)
  userEmail =  this._userEmail.asReadonly();
  userToken = this._userToken.asReadonly();
  refToken = this._RefToken.asReadonly();

   
  

  private httpClient = inject(HttpClient)

  SetUserEmail(email:string){
    this._userEmail.set(email);
    
  }
  SetUserToken(token:string){
    this._userToken.set(token);
    
  }
setUserRefToken(refToken:string){
  this._RefToken.set(refToken);
}
 

  sendEmail(email:string){
  return this.httpClient.post<Imail>(`${this.BASE_URL}/api/Auth/send-magic-link` , {email})
  }

  checkIfExistEmail(email:string){
    return this.httpClient.post(`${this.BASE_URL}/api/Auth/check-email` , {email})
  }
  confrmMail(credentials:ConfirmEmailRequest){
    return this.httpClient.post<ConfirmEmailResponse>(`${this.BASE_URL}/api/Auth/confirm-signup` , credentials)
  }

  registerWithEmailAndPass(regsData:{email:string , password:string}){
    console.log("from auth service " , regsData);
    
   return this.httpClient.post<ConfirmEmailResponse>(`${this.BASE_URL}/api/Auth/register`,regsData)
  }
// * plans Endpoint
  getAllPlans(){
    return this.httpClient.get<Iplanresponse>(`${this.BASE_URL}/api/Subscription/plans`)
  }
  subscripePlan(planData:{Id:string , Name:string}){
    return this.httpClient.post(`${this.BASE_URL}/api/Subscription/subscribe`,planData)
  }

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
// * payment Endpoints

}
