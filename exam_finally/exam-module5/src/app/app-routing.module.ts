import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './component/crud/list/list.component';
import {CreateComponent} from './component/crud/create/create.component';
import {DetailComponent} from './component/crud/detail/detail.component';
import {EditComponent} from './component/crud/edit/edit.component';


const routes: Routes = [
  {path: 'car/list', component: ListComponent},
  {path: 'car/create', component: CreateComponent},
  {path: 'car/detail/:id', component: DetailComponent},
  {path: 'car/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
