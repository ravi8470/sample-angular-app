import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';

@Component({
    selector: 'app-example2',
    templateUrl: './example2.component.html',
    styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {

    constructor(private service: RedditService) { }
    data1: string;
    ngOnInit() {
        this.service.currentMessage.subscribe((data: any) => { this.data1 = data.first_name })
    }


}
