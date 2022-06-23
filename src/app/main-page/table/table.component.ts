import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/delete-dialog/delete-dialog.component';
import { EmployeeAccount } from 'src/app/empaccount.services';
import { TableServices } from './table.services';
import { MainPageServices } from '../main-page-services';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TableServices],
})
export class TableComponent implements OnInit {
  // @Input() account: {firstName: string, lastName: string, email: string, jobRole: string};

  userDetails:{id: any, firstName: any, lastName: any, email: any,jobRole: any} [] = [];
  // i: number = this.mainPageService.i;

  constructor(private http: HttpClient, private router : Router,private route: ActivatedRoute, public dialog: MatDialog, public employeeAccountService: EmployeeAccount,public mainPageService : MainPageServices,public tableService : TableServices) {

  }

  ngOnInit(): void {
    // this.http.get('https://n428sx7tq9.execute-api.us-east-1.amazonaws.com/UserDev/users').subscribe((result: any)=>{
    //   this.employeeAccountService.accounts = result.users;
    //   console.log(result);
    //   console.log(this.employeeAccountService.accounts);
    //   this.userDetails = this.employeeAccountService.accounts;
    // })

    this.userDetails = this.employeeAccountService.accounts;


    // console.log(this.i);
  }



  onEdit(id: number){
    this.router.navigate(["/edit-emp/"+id],{relativeTo: this.route});
  }


  openDialog(id: number){
    console.log(this.tableService.i);
    // console.log(this.i);
   let dialogRef =  this.dialog.open(DeleteDialogComponent);

   dialogRef.afterClosed().subscribe(result => {
     console.log(result);
     if(result == "true"){
       let index = this.employeeAccountService.accounts.findIndex(ind => ind.id === +id);
       if(index > -1){
        let temp = this.employeeAccountService.accounts[index].id;
        this.employeeAccountService.accounts.splice(index, 1);
        for(let i=id-1;i<this.employeeAccountService.accounts.length;i++){
          let tempId = this.employeeAccountService.accounts[i].id;
          this.employeeAccountService.accounts[i].id = temp;
          temp = tempId;
        }
       }
     }
   });
  }
}
