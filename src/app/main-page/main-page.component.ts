import { Component, OnInit } from '@angular/core';
import { MainPageServices } from './main-page-services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [MainPageServices]
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
