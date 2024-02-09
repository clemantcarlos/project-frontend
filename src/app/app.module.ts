import { Page404Component } from './page404/page404.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeAlumnoComponent } from './home-alumno/home-alumno.component';
import { HomePersonalComponent } from './home-personal/home-personal.component';
import { HeaderComponent } from './components/header/header.component';
import { BugerBtnComponent } from './components/buger-btn/buger-btn.component';
import { UsersComponent } from './users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserComponent } from './user/user.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { SearchComponent } from './components/search/search.component';
import { CreateFormComponent } from './components/create-form/create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeAlumnoComponent,
    HomePersonalComponent,
    Page404Component,
    HeaderComponent,
    BugerBtnComponent,
    UsersComponent,
    UserComponent,
    LoadingSpinnerComponent,
    UserTableComponent,
    SearchComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [{provide:LOCALE_ID,useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
