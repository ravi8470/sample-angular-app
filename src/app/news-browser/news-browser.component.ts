import { Component, OnInit, AfterContentInit } from '@angular/core';
import { RedditService } from '../_services/reddit.service';
import { MatCard } from "@angular/material/card";
import { MatList, MatListItem } from "@angular/material/list";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-news-browser',
  templateUrl: './news-browser.component.html',
  styleUrls: ['./news-browser.component.css']
})
export class NewsBrowserComponent implements OnInit, AfterContentInit {

  constructor(private redditService: RedditService, private spinnerService: NgxSpinnerService) { }

  news: Array<any> = [];
  allNewsIds: Array<any> = [];
  currentPage: number = 1;
  perPage: number = 10;
  ngOnInit() {

  }
  ngAfterContentInit() {
    this.spinnerService.show();
    this.redditService.getNewsIds().subscribe(x => {
      this.allNewsIds = x;
      this.getNews();
    })
  }

  getNews(cp = this.currentPage) {
    this.spinnerService.show();
    this.redditService.getNews(this.allNewsIds.slice((cp - 1) * 10, (cp - 1) * 10 + 10)).subscribe(y => {
      this.news = y;
      this.currentPage = cp ? cp : this.currentPage;
      this.spinnerService.hide();
    })
  }

}
