import { Observable, pipe, forkJoin, merge, Subject, BehaviorSubject } from "rxjs";
import { pluck, mergeMap, bufferCount, filter } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RedditService {

    private messageSource = new BehaviorSubject('blank');
    // private messageSource = new Subject();
    currentMessage = this.messageSource.asObservable();

    constructor(private http: HttpClient) { }

    getPosts(): Observable<any> {
        return this.http.get('https://www.reddit.com/r/programming.json').pipe(
            pluck('data', 'children')
        )
    }

    getNewsIds(): Observable<any> {
        // GET NEWS IDS AS ARRAY AND THEN SLICE IT AND RETURN IT AS OBSERVABLE USING RXJS MAP CODE
        // return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json').pipe(map((x: Array<any>) => {
        //     console.log(x);
        //     return x.slice(0, 10)
        // }))
        return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    }

    getMovies(term, pageNum): Observable<any> {
        return this.http.get(`http://www.omdbapi.com/?apikey=dabff1e2&s=${term}&page=${pageNum}`)
    }

    getNews(idArr: Array<any>): Observable<any> {
        return forkJoin(idArr.map(id => this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)))
    }

    getCommentsRecursive(id) {
        this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).subscribe((y: any) => {

            if (y.type == "story") {
                console.log('title: >>', y.title);
            }
            if (y.type == "comment") {
                console.log('Comment: >>', y.text);
            }
            if (y.kids) {
                this.getCommentsRecursive(y.kids[0])
            }
        })
    }
    testCall() {
        this.http.get('https://reqres.in/api/users/2').subscribe((data: any) => {
            this.messageSource.next(data.data);
        });
    }
}
