import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ListEmployeeComponent} from './employee-management/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './employee-management/create-employee/create-employee.component';
import {DetailEmployeeComponent} from './employee-management/detail-employee/detail-employee.component';
import {EditEmployeeComponent} from './employee-management/edit-employee/edit-employee.component';



const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'employee/list', component: ListEmployeeComponent},
  {path: 'employee/create', component: CreateEmployeeComponent},
  {path: 'employee/detail/:id', component: DetailEmployeeComponent},
  {path: 'employee/edit/:id', component: EditEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
