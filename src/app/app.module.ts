import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from "@angular/material/card";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditBrowserComponent } from './reddit-browser/reddit-browser.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NewsBrowserComponent } from './news-browser/news-browser.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlatformModule } from '@angular/cdk/platform';
import { ObserversModule } from '@angular/cdk/observers';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { MatButtonModule } from '@angular/material/button';
import { NgxSpinnerModule } from "ngx-spinner";
import { ExampleComponent } from './example/example.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule } from '@angular/material/input';
import { Example2Component } from './example2/example2.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
        AppComponent,
        RedditBrowserComponent,
        NewsBrowserComponent,
        FlexboxComponent,
        ExampleComponent,
        MovieGridComponent,
        Example2Component,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatToolbarModule,
        FlexLayoutModule.withConfig({
            useColumnBasisZero: false,
            printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
        }),
        ObserversModule,
        PlatformModule,
        MatButtonModule,
        NgxSpinnerModule,
        MatIconModule,
        MatSidenavModule,
        MatGridListModule,
        NgxPaginationModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
