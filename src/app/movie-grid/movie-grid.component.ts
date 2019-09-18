import { Component, OnInit, ViewChild } from '@angular/core';
import { RedditService } from '../reddit.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-movie-grid',
    templateUrl: './movie-grid.component.html',
    styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {

    constructor(private dataService: RedditService, private spinner: NgxSpinnerService) { }
    apiKey: string = 'dabff1e2';
    movies: Array<any> = [];
    currentPage: number = 1;
    totalResults: number;
    @ViewChild('text', { static: false }) text;
    ngOnInit() {

    }
    search(pageNum = this.currentPage) {
        this.spinner.show();
        this.dataService.getMovies(this.text.nativeElement.value, pageNum).subscribe(x => {
            this.movies = x.Search;
            this.totalResults = x.totalResults;
            this.currentPage = pageNum ? pageNum : this.currentPage;
            this.spinner.hide();
        });
    }

    pageChanged(ev) {
        console.log(ev);
    }

}
