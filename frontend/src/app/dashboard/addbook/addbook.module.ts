import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddBookComponent } from './addbook.component';

@NgModule({
    declarations: [
     AddBookComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    exports: [AddBookComponent],
    providers: [],
    bootstrap: [AddBookComponent]
  })
export class AddBookModule { }
