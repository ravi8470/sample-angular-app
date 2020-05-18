import { Component, OnInit, ViewChild } from '@angular/core';
import { RedditService } from '../reddit.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {

  constructor(private dataService: RedditService, private spinner: NgxSpinnerService, private toastr: ToastrService) { }
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
      this.spinner.hide();
      if (x.Error) {
        this.toastr.error(x.Error, 'Error');
        return;
      }
      this.movies = x.Search;
      this.totalResults = x.totalResults;
      this.currentPage = pageNum ? pageNum : this.currentPage;
    });
  }

  pageChanged(ev) {
    console.log(ev);
  }

}
