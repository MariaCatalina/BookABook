import { Component, ViewChild, OnInit } from '@angular/core';
import {BookModel}  from './addbook/BookModel';
import { Router } from '@angular/router';
import { PublisherService } from '../publisher/publisher.service';
import { Message } from '../publisher/message';
import { UserService } from '../login-module/user.service';
import { BooksService } from './books.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
    model: any = {};

    cards: BookModel[] = [];

    constructor(private router: Router, 
        private publisher: PublisherService,
        private userService: UserService, 
        private bookService: BooksService){

    }
    ngOnInit() {
        this.bookService.getAllBooks().subscribe((books: BookModel[]) => {
            this.cards = books;
            console.log(this.cards);
        });
        this.publisher.sendToChannel("hide-header", new Message("show"));
    }

    displayBook(book: BookModel){
        this.router.navigate(['/bookDetails'], { queryParams: { bookID: book.id}})
    }
}
