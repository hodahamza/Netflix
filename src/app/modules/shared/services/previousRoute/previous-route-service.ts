import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviousRouteService {
  private previousUrl: string = '';
  private currentUrl: string = '';

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.urlAfterRedirects;
      });
  }

  public getPreviousUrl(): string {
    return this.previousUrl;
  }
}
