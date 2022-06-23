import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeAccount } from '../empaccount.services';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  id: number = 0;
  index: number = 0;
  editUserForm! : FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, public employeeAccountService: EmployeeAccount,private http: HttpClient) {

   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.index = this.employeeAccountService.accounts.findIndex(ind => ind.id == +this.id);

    this.editUserForm = new FormGroup({
      'firstName': new FormControl(this.employeeAccountService.accounts[this.index].firstName, [Validators.required, this.noWhitespaceValidator.bind(this)]),
      'lastName' : new FormControl(this.employeeAccountService.accounts[this.index].lastName, [Validators.required, this.noWhitespaceValidator.bind(this)]),
      'email' : new FormControl(this.employeeAccountService.accounts[this.index].email, [Validators.required, Validators.email]),
      'code': new FormControl(this.employeeAccountService.accounts[this.index].code, Validators.required),
      'phoneNumber' : new FormControl(this.employeeAccountService.accounts[this.index].phoneNumber, [Validators.required, Validators.min(1)]),
      'role' : new FormControl(this.employeeAccountService.accounts[this.index].jobRole, Validators.required),
    });

    // console.log(this.id);
    // console.log(this.index);
  }

  onUpdate(){
    this.employeeAccountService.accounts[this.index].firstName = this.editUserForm.value.firstName;
    this.employeeAccountService.accounts[this.index].lastName = this.editUserForm.value.lastName;
    this.employeeAccountService.accounts[this.index].email = this.editUserForm.value.email;
    this.employeeAccountService.accounts[this.index].code = this.editUserForm.value.code;
    this.employeeAccountService.accounts[this.index].phoneNumber = this.editUserForm.value.phoneNumber;
    this.employeeAccountService.accounts[this.index].jobRole = this.editUserForm.value.role;

    // const body = {
    //   "id": this.id,
    //   "firstName" : this.editUserForm.value.firstName,
    //   "lastName" : this.editUserForm.value.lastName,
    //   "email" : this.editUserForm.value.email,
    //   "jobRole" : this.editUserForm.value.role,
    //   "phoneNumber" : this.editUserForm.value.phoneNumber,
    //   "code" : this.editUserForm.value.code,
    // }
    // this.http.put('https://n428sx7tq9.execute-api.us-east-1.amazonaws.com/UserDev/edit-user',body).subscribe((result)=> {
    //   console.log(result);
      // this.router.navigate(['/']);
    // });

    this.router.navigate(['/']);

  }

  onCancel(){
    this.router.navigate(['/']);
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
