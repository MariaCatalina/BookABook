import { Injectable } from '@angular/core';
// import * as Rx from 'rxjs/Rx'
import { Http, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http'
import 'rxjs/Rx';

import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookModel, BookModelReturned } from './addbook/BookModel';
import { UserService } from '../login-module/user.service';
import { Feedback } from './book-details/feedback';


@Injectable()
export class BooksService {
    private baseURL = "http://127.0.0.1:8080/bookabook";
    loginUrl = "http://127.0.0.1:8080/bookabook/addbook";
    getAllBooksURL = "http://127.0.0.1:8080/bookabook/getbook";

    constructor(private http: HttpClient, private userService: UserService) { }

    addNewBook(model: any): Observable<any> {
        let body = {
            title: model.title,
            author: model.author,
            language: model.language,
            disponibility: model.disponibility,
            description: model.description,
            userID: this.userService.getCrtUser().id
        }

        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<any>(this.loginUrl, body, {headers: myheader});
    }

    getAllBooks(): Observable< BookModel[]> {
        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get< BookModel[]>(this.getAllBooksURL, {headers: myheader});
    }

    getBook(bookID: number): Observable<any> {
        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        let url = this.getAllBooksURL + "?bookID="+ bookID;
        return this.http.get< BookModel[]>(url, {headers: myheader});
    }

    submitFeedback(model: any, bookID: number): Observable<any>{
        let url = this.baseURL + "/addfeedback";
        let body = {
            title: model.title,
            comment: model.comment,
            bookID: bookID
        }

        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<any>(url, body, {headers: myheader});
    }

    getFeedbackList(bookID: number): Observable<Feedback[]> {
        let url = this.baseURL + "/getfeedback" + "?bookID="+ bookID;
        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get< Feedback[]>(url, {headers: myheader});
    }

    borrowBook(book: BookModel): Observable<any> {
        let url = this.baseURL + "/borrow";
        let body = {
            userID: book.userID,
            bookID: book.id,
            borrower: this.userService.getCrtUser().id
        }

        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<any>(url, body, {headers: myheader});
    }

    getMyBorrowedBooks(): Observable<BookModel[]> {
        let url = this.baseURL + "/getborrowed" + "?userID=" + this.userService.getCrtUser().id;
        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get<BookModel[]>(url, {headers: myheader});
    }

    getMyReceivedBorrowedBooks(): Observable<BookModelReturned[]> {
        let url = this.baseURL + "/getreturned" + "?userID=" + this.userService.getCrtUser().id;
        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get<BookModelReturned[]>(url, {headers: myheader});
    }

    returnBookToProp(bookID: number): Observable<any> {
        let url = this.baseURL + "/returnBookToProp";
        let body = {
            userID: this.userService.getCrtUser().id,
            bookID: bookID
        }

        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<any>(url, body, {headers: myheader});
    }

    returnBookToLib(bookID: BookModelReturned , stars: number): Observable<any> {
        let url = this.baseURL + "/returnBookToLib";
        let body = {
            userEmail: bookID.user,
            bookID: bookID.bookID,
            stars: stars
        }

        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<any>(url, body, {headers: myheader});
    }
}