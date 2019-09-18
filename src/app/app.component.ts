import { Component, ViewChild, OnInit } from '@angular/core';
import { RedditService } from './reddit.service';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from './auth.service';
// import { MatToolbar } from "@angular/material/toolbar";
// import { MatButton } from "@angular/material/button";
// import { MatIcon } from "@angular/material/icon";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private redditService: RedditService, private router: Router, private authService: AuthService) { }
    isLoggedIn: Boolean;
    ngOnInit() {
        // this.redditService.getCommentsRecursive(20890682);
        this.redditService.testCall();
        this.isLoggedIn = !!this.authService.currentUserValue ? true : false;
        this.authService.currentUser.subscribe(data => { console.log(data); this.isLoggedIn = data ? true : false });
        console.log('this.islogg', this.isLoggedIn);
    }
    logout() {
        this.authService.logout();
    }
}

