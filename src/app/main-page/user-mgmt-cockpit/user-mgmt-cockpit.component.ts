import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-mgmt-cockpit',
  templateUrl: './user-mgmt-cockpit.component.html',
  styleUrls: ['./user-mgmt-cockpit.component.css']
})
export class UserMgmtCockpitComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNewUser(){
    this.router.navigate(['/new-employee']);
  }
}
