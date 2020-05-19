import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private currentTabSubject = new BehaviorSubject('Home');
  public currentTab$: Observable<any>;

  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        switch (val.url.split('?')[0]) {
          case '/movies': this.updateTab('Movies');
            break;
          case '/news': this.updateTab('News');
            break;
          case '/reddit-news': this.updateTab('r/Programming');
            break;
          case '/movies': this.updateTab('Movies');
            break;
          case '/login': this.updateTab('Login');
            break;
          case '/logout': break;
          default: this.updateTab('Home');
        }
      }
    });
    this.currentTab$ = this.currentTabSubject.asObservable();
  }

  updateTab(tab) {
    this.currentTabSubject.next(tab);
  }
}
