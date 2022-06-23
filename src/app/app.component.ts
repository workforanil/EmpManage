import { Component, OnInit } from '@angular/core';
import { EmployeeAccount } from './empaccount.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  title = 'empManageApp';
  
  constructor(private employeeAccountService : EmployeeAccount){}
  ngOnInit(): void {
    
  }
}
