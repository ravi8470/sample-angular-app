import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  data1: string;

  constructor(private service: RedditService) { }


  ngOnInit() {
    // this.service.currentMessage.subscribe((data: any) => { this.data1 = data.first_name })
  }

}
