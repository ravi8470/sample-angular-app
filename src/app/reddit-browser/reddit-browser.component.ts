import { Component, OnInit } from '@angular/core';
import { RedditService } from '../_services/reddit.service';
// import { MatCard } from "@angular/material/card";
// import { MatList, MatListItem } from "@angular/material/list";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-reddit-browser',
  templateUrl: './reddit-browser.component.html',
  styleUrls: ['./reddit-browser.component.css']
})
export class RedditBrowserComponent implements OnInit {

  constructor(private redditService: RedditService, private spinnerService: NgxSpinnerService) { }
  posts: Array<any> = [];

  ngOnInit() {
    this.spinnerService.show();
    this.redditService.getPosts().subscribe(x => {
      this.posts = x;
      this.spinnerService.hide();
    });
  }

}
