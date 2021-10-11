import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './component/list/list.component';
import { EditComponent } from './component/edit/edit.component';
import { DetailComponent } from './component/detail/detail.component';
import { CreateComponent } from './component/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    DetailComponent,
    CreateComponent
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
