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
        component: NewsBrowserComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'reddit-news',
        component: RedditBrowserComponent
    },
    {
        path: 'flex',
        component: FlexboxComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'movies',
        component: MovieGridComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
