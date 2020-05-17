import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditBrowserRoutingModule } from './reddit-browser-routing.module';
import { MatInputModule } from '@angular/material/input';
import { RedditBrowserComponent } from './reddit-browser.component';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    RedditBrowserRoutingModule,
    MatInputModule,
    MatCardModule,
    NgxSpinnerModule,
  ],
  declarations: [RedditBrowserComponent]
})
export class RedditBrowserModule { }