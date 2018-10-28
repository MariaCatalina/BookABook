import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import {RegisterComponent} from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';

@NgModule({
    declarations: [
     LoginComponent,
     RegisterComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      HttpModule
    ],
    providers: [LoginService, UserService],
    bootstrap: [LoginComponent]
  })
export class LoginModule { }
