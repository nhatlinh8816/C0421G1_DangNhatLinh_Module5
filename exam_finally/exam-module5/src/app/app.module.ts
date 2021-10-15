import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { HeaderComponent } from './component/view/header/header.component';
import { NavbarComponent } from './component/view/navbar/navbar.component';
import { FooterComponent } from './component/view/footer/footer.component';
import { ListComponent } from './component/crud/list/list.component';
import { CreateComponent } from './component/crud/create/create.component';
import { EditComponent } from './component/crud/edit/edit.component';
import { DetailComponent } from './component/crud/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    DetailComponent
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
