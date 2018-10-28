import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BookModel } from '../addbook/BookModel';
import { Feedback } from './feedback';
import { BooksService } from '../books.service';

@Component({
    selector: 'book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
    model: any = {};
    private sub: Subscription;
    bookID: number;

    feedbackList: Feedback[] = [];

    book: BookModel = new BookModel();

    constructor(private activeRoute: ActivatedRoute,
        private router: Router,
        private bookService: BooksService) {

    }
    ngOnInit() {
        this.activeRoute
            .queryParams
            .subscribe(params => {
                // Defaults to 0 if no query param provided.
                console.log(params);
                this.bookID = params.bookID;

                this.bookService.getBook(this.bookID).subscribe((reponse: BookModel) => {
                    this.book = reponse;
                });

                this.getFeedBackList();

            });

    }

    submitFeedback() {
        this.bookService.submitFeedback(this.model, this.bookID).subscribe(() => {
            this.getFeedBackList();
        });
    }

    getFeedBackList() {
        this.bookService.getFeedbackList(this.bookID).subscribe((res: Feedback[]) => {
            this.feedbackList = res;
        });
    }

    borrowBook(book) {
        this.bookService.borrowBook(book).subscribe((response: string) => {
            this.router.navigate(['/dashboard']);
        });
    }
}
