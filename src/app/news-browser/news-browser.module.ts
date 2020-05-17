import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsBrowserRoutingModule } from './news-browser-routing.module';
import { MatInputModule } from '@angular/material/input';
import { NewsBrowserComponent } from './news-browser.component';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NewsBrowserRoutingModule,
    MatInputModule,
    MatCardModule,
    NgxSpinnerModule,
    NgxPaginationModule,
  ],
  declarations: [NewsBrowserComponent]
})
export class NewsBrowserModule { }