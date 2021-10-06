import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from './component/dictionary-detail/dictionary-detail.component';
import {DictionaryListComponent} from './component/dictionary-list/dictionary-list.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {path: '', component: DictionaryListComponent},
  {path: 'dictionary/translate/:word', component: DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
