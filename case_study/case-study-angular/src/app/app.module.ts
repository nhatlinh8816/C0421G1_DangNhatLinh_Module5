import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './customer-management/create-customer/create-customer.component';
import { ListCustomerComponent } from './customer-management/list-customer/list-customer.component';
import { DeleteCustomerComponent } from './customer-management/delete-customer/delete-customer.component';
import { EditCustomerComponent } from './customer-management/edit-customer/edit-customer.component';
import { CreateEmployeeComponent } from './employee-management/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employee-management/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employee-management/delete-employee/delete-employee.component';
import { ListEmployeeComponent } from './employee-management/list-employee/list-employee.component';
import { ListContractComponent } from './contract-management/list-contract/list-contract.component';
import { EditContractComponent } from './contract-management/edit-contract/edit-contract.component';
import { DeleteContractComponent } from './contract-management/delete-contract/delete-contract.component';
import { CreateContractComponent } from './contract-management/create-contract/create-contract.component';
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    DeleteCustomerComponent,
    EditCustomerComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    ListEmployeeComponent,
    ListContractComponent,
    EditContractComponent,
    DeleteContractComponent,
    CreateContractComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
