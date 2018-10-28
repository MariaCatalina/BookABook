import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DashboardComponent} from './dashboard.component';
import { HeaderFooterModule } from '../headerfooter/headerfooter.module';
import { CardComponentComponent } from './card/card.component';
import { AddBookModule } from './addbook/addbook.module';
import { BookedComponentComponent } from './booked/booked.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksService} from './books.service';

@NgModule({
    declarations: [
     DashboardComponent,
    CardComponentComponent,
    BookedComponentComponent,
    BookDetailsComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HeaderFooterModule,
      AddBookModule

    ],
    providers: [BooksService],
    bootstrap: [DashboardComponent]
  })
export class DashboardModule { }
