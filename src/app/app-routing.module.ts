import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';

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
