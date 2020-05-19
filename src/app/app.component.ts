import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { RedditService } from './_services/reddit.service';
import { Router } from '@angular/router';
import { CommonService } from './_services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn: Boolean;
  isSideNavOpened: Boolean;
  currentTab: string;

  constructor(
    private redditService: RedditService,
    private router: Router,
    private authService: AuthService,
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.redditService.testCall();
    // this.isLoggedIn = !!this.authService.currentUserValue ? true : false;
    this.authService.currentUser.subscribe(data => {
      console.log(data);
      this.isLoggedIn = data ? true : false
    });
    this.commonService.currentTab$.subscribe(x => {
      this.currentTab = x;
    })
  }

  routeTo(route) {

    this.isSideNavOpened = false;
    this.router.navigate([route]);
  }

  logout() {
    this.isSideNavOpened = false;
    this.authService.logout();
  }
}

