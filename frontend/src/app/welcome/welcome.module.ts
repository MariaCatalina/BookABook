import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  declarations: [
    WelcomeComponent
    
  ],
  imports: [
    BrowserModule
  ],
  exports: [
      WelcomeComponent
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class WelcomeModule { }