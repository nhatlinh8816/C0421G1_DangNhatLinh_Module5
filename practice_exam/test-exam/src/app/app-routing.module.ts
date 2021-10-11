import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './component/slot-component/list/list.component';
import {HomeComponent} from './component/home/home.component';
import {CreateComponent} from './component/slot-component/create/create.component';
import {DetailComponent} from './component/slot-component/detail/detail.component';
import {EditComponent} from './component/slot-component/edit/edit.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'slot/list', component: ListComponent},
  {path: 'slot/create', component: CreateComponent},
  {path: 'slot/detail/:id', component: DetailComponent},
  {path: 'slot/edit/:id', component: EditComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
