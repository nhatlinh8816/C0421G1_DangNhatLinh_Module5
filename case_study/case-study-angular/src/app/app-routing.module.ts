import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ListEmployeeComponent} from './employee-management/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './employee-management/create-employee/create-employee.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'employee/list', component: ListEmployeeComponent},
  {path: 'employee/create', component: CreateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
