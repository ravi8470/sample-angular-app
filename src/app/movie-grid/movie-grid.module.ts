import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieGridComponent } from './movie-grid.component';
import { MovieGridRoutingModule } from './movie-grid-routing.module';
import { MatInputModule } from '@angular/material/input';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MovieGridRoutingModule,
    MatInputModule,
    NgxSpinnerModule,
    MatGridListModule,
    NgxPaginationModule,
    MatButtonModule,
  ],
  declarations: [MovieGridComponent]
})
export class MovieGridModule { }