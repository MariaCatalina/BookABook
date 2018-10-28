import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminGuardService } from './admin-guard';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AdminGuardService
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthService],
  bootstrap: [AdminGuardService]
})
export class GuardModuleModule { }
