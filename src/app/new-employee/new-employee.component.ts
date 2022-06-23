import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeAccount } from '../empaccount.services';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  newUserForm! : FormGroup;
  constructor(private router: Router,private route: ActivatedRoute, private employeeAccountService: EmployeeAccount,private http: HttpClient) {

  }

  ngOnInit(): void {
    this.newUserForm = new FormGroup({
      'firstName': new FormControl(null || '', [Validators.required, this.noWhitespaceValidator.bind(this)]),
      'lastName' : new FormControl(null, [Validators.required, this.noWhitespaceValidator.bind(this)]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'code': new FormControl(null, Validators.required),
      'phoneNumber' : new FormControl(null, [Validators.required, Validators.min(1)]),
      'role' : new FormControl(null, Validators.required),
    });
  }
  onSubmit(){
    console.log(this.newUserForm);
    // let body = {};
    // this.http.get('https://n428sx7tq9.execute-api.us-east-1.amazonaws.com/UserDev/users').subscribe((result: any)=>{
    //   console.log(result);
    //   let size = result.users.length()+1;
    //   console.log(size);
    //   body = {
    //     "id": ""+size,
    //     "firstName": this.newUserForm.value.firstName,
    //     "lastName": this.newUserForm.value.lastName,
    //     "email": this.newUserForm.value.email,
    //     "code": this.newUserForm.value.code,
    //     "phoneNumber": this.newUserForm.value.phoneNumber,
    //     "jobRole": this.newUserForm.value.role
    //   }
    //   this.http.post('https://n428sx7tq9.execute-api.us-east-1.amazonaws.com/UserDev/new-user',body).subscribe((result)=>{

    //   console.log(result);
    //   console.log(this.employeeAccountService.accounts);
    //   this.router.navigate(['/'],{relativeTo: this.route});
    // });
    // })

    this.employeeAccountService.accounts.push({
      id: this.employeeAccountService.accounts.length+1,
      firstName: this.newUserForm.value.firstName,
      lastName: this.newUserForm.value.lastName,
      email: this.newUserForm.value.email,
      code: this.newUserForm.value.code,
      phoneNumber: this.newUserForm.value.phoneNumber,
      jobRole: this.newUserForm.value.role,
    });

    this.router.navigate(['/'],{relativeTo: this.route});

  }

  onCancel(){
    this.router.navigate(['/'],{relativeTo: this.route});
  }

  noWhitespaceValidator(control: FormControl){
    // console.log(control.value);
    let isWhitespace = (control.value || ' ').trim().length === 0;

    if(control.value == null){
    }
    else{
      isWhitespace = (control.value.indexOf(' ') >=0 );
    }

    // console.log(isWhitespace);
    const isValid = !isWhitespace;
    return isValid ? null : {'whitespace': true};
  }

}
