import { Component, ViewChild, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { BookModel } from './BookModel';
import { Router } from '@angular/router';

@Component({
    selector: 'addbook',
    templateUrl: './addbook.component.html',
    styleUrls: ['./addbook.component.scss']
})
export class AddBookComponent implements OnInit{
    model: any = {};

    constructor(private booksService: BooksService, private router: Router){

    }
    ngOnInit() {
    }

    addNewBook() {
       this.booksService.addNewBook(this.model).subscribe(() => {
            this.router.navigate(['/dashboard']);
       });
    }
}
