import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsBrowserComponent } from './news-browser.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: '',
    component: NewsBrowserComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsBrowserRoutingModule { }