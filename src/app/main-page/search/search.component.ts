import { Component, Injectable, Input, OnInit } from '@angular/core';
import { EmployeeAccount } from 'src/app/empaccount.services';
import { MainPageServices } from '../main-page-services';
import { TableServices } from '../table/table.services';
import { SearchService } from './search.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService,TableServices]
})
export class SearchComponent implements OnInit {
  i : number = 0;
  constructor(public mainPageService : MainPageServices, private tableService : TableServices,public empAccountService: EmployeeAccount) { }

  ngOnInit(): void {
    this.i = this.mainPageService.i;
  }
  onPrev(){
    if(this.i<2){
      this.i =1;
      this.mainPageService.i = 1;
      this.tableService.onPrev();
    }
    else{
      this.i -= 1;
      this.mainPageService.i -= 1;
      this.tableService.onPrev();
    }
    
    // console.log(this.i);
}
onNext(){
    this.i += 1;
    this.mainPageService.i += 1;
    this.tableService.onNext();
    // console.log(this.empAccountService.accounts.length);
    // console.log(this.mainPageService.i);
}
}
