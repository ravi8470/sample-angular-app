import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedditBrowserComponent } from './reddit-browser.component';


const routes: Routes = [
  {
    path: '',
    component: RedditBrowserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedditBrowserRoutingModule { }