import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';

@NgModule({
    declarations: [
      AdminComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
    
    ],
    providers: [],
    bootstrap: [AdminComponent]
  })
export class AdminModule { }
