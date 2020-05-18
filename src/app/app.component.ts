import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { RedditService } from './reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn: Boolean;

  constructor(
    private redditService: RedditService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.redditService.testCall();
    this.isLoggedIn = !!this.authService.currentUserValue ? true : false;
    this.authService.currentUser.subscribe(data => { console.log(data); this.isLoggedIn = data ? true : false });
  }

  logout() {
    this.authService.logout();
  }
}

