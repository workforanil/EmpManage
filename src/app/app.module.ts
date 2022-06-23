import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './main-page/search/search.component';
import { TableComponent } from './main-page/table/table.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { UserMgmtCockpitComponent } from './main-page/user-mgmt-cockpit/user-mgmt-cockpit.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MaterialModule } from './material/material.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeAccount } from './empaccount.services';
import { FilterPipe } from './filter.pipe';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { environment } from 'src/environments/environment';


const appRoute : Routes = [
  {path: '', component: MainPageComponent},
  {path: 'new-employee', component: NewEmployeeComponent},
  {path: 'edit-emp', component: EditEmpComponent},
  {path: 'edit-emp/:id', component: EditEmpComponent}
]

const app = initializeApp(environment.firebaseConfig);
const database = getDatabase(app);

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TableComponent,
    NewEmployeeComponent,
    UserMgmtCockpitComponent,
    MainPageComponent,
    EditEmpComponent,
    DeleteDialogComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeAccount],
  bootstrap: [AppComponent]
})
export class AppModule { }
