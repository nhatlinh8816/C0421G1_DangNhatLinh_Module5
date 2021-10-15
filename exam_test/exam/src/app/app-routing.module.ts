import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './component/list/list.component';
import {CreatComponent} from './component/creat/creat.component';
import {DetailComponent} from './component/detail/detail.component';
import {EditComponent} from './component/edit/edit.component';


const routes: Routes = [
  {path: 'product/list', component: ListComponent},
  {path: 'product/create', component: CreatComponent},
  {path: 'product/detail/:id', component: DetailComponent},
  {path: 'product/edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
