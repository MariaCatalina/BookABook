import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GuardModuleModule } from './guards/guards.module';
import { AuthService } from './guards/auth.service';
import { LoginModule } from './login-module/login.module';
import { WelcomeModule } from './welcome/welcome.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AddBookModule } from './dashboard/addbook/addbook.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { HeaderFooterModule } from './headerfooter/headerfooter.module';
import { PublisherModule } from './publisher/publisher.module';
import { AdminModule } from './admin/admin.module';
import { GoogleMapModule } from './map/map.module';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    WelcomeModule,
    DashboardModule,
    AddBookModule,
    AppMaterialModule,
    HeaderFooterModule,
    PublisherModule,
    AdminModule,
    GoogleMapModule
  ],
  providers: [GuardModuleModule, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
