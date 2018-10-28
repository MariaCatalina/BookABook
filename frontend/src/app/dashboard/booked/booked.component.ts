import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { BookModel, BookModelReturned } from '../addbook/BookModel';
import { BooksService } from '../books.service';
import { UserService } from '../../login-module/user.service';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
    selector: 'booked',
    templateUrl: './booked.component.html',
    styleUrls: ['./booked.component.scss']
})
export class BookedComponentComponent implements OnInit {
    model: any = {};
    modelR: any = {};
    books: any = [];

    showEmpty = true;
    bookedUser = false;

    booksReceived: BookModelReturned[] = [];
    constructor(private bookService: BooksService, private userService: UserService) {

    }
    ngOnInit() {
        this.refresh();
        if (this.userService.getCrtUser().role == "Booker") {
            this.bookedUser = true;
        }
    }

    refresh() {
        this.bookService.getMyBorrowedBooks().subscribe((response: BookModel[]) => {
            this.books = response;
        });

        if (this.userService.getCrtUser().role == "Booker") {
            this.bookService.getMyReceivedBorrowedBooks().subscribe((response: BookModelReturned[]) => {
                this.booksReceived = response;
                if (this.booksReceived.length == 0) {
                    this.showEmpty = true;
                } else {
                    this.showEmpty = false;
                }
            });
        }
    }

    returnBookToLib(book: BookModelReturned) {
        this.bookService.returnBookToLib(book, this.modelR.condition).subscribe((response: string) => {
            this.refresh();
        })
    }

    returnToProp(book: BookModel) {
        this.bookService.returnBookToProp(book.id).subscribe((response: string) => {
            this.refresh();
        });
    }
}