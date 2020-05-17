import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsBrowserComponent } from './news-browser/news-browser.component';
import { RedditBrowserComponent } from './reddit-browser/reddit-browser.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: '',
    component: ExampleComponent,
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: () => import('./news-browser/news-browser.module').then(m => m.NewsBrowserModule)
  },
  {
    path: 'reddit-news',
    loadChildren: () => import('./reddit-browser/reddit-browser.module').then(m => m.RedditBrowserModule)
  },
  // {
  //   path: 'flex',
  //   component: FlexboxComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'movies',
    loadChildren: () => import('./movie-grid/movie-grid.module').then(m => m.MovieGridModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
