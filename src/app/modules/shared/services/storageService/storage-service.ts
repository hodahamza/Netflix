import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  // ===== TOKEN =====
  saveAccessToken(token: string) {
    if (this.isBrowser()) {
      localStorage.setItem("AccessToken", token);
    }
  }

  get getAccessToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem("AccessToken");
    }
    return null; // SSR
  }


    saveRefrechToken(refToken:string){
     if (this.isBrowser()) {
      localStorage.setItem("RefToken", refToken);
    }
  }

  get getRefToken():string|null{
     if (this.isBrowser()) {
      return localStorage.getItem("RefToken");
    }
    return null;
  }

  // ===== EMAIL =====
  saveEmail(email: string) {
    if (this.isBrowser()) {
      localStorage.setItem("Email", email);
    }
  }

  get getEmail(): string {
    if (this.isBrowser()) {
      return localStorage.getItem("Email") ?? "No Email";
    }
    return "No Email"; // SSR fallback
  }


}
