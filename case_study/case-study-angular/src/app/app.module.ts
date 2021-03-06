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
import { ListEmployeeComponent } from './employee-management/list-employee/list-employee.component';
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './view-management/header/header.component';
import { NavbarComponent } from './view-management/navbar/navbar.component';
import { SidebarComponent } from './view-management/sidebar/sidebar.component';
import { BodyComponent } from './view-management/body/body.component';
import { FooterComponent } from './view-management/footer/footer.component';
import { DetailEmployeeComponent } from './employee-management/detail-employee/detail-employee.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    DeleteCustomerComponent,
    EditCustomerComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    HomePageComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    BodyComponent,
    FooterComponent,
    DetailEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
