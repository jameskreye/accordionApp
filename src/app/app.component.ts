import { Component, OnInit } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  collapsing = true;
  content : any

  ngOnInit() {
    this.content = data;
    console.log(this.content)
  }
}
