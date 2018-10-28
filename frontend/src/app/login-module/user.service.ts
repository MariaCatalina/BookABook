import { Injectable } from '@angular/core';
// import * as Rx from 'rxjs/Rx'
import { User } from './user';
import { Http, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http'
import 'rxjs/Rx';

import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserService {

    crtUser: User;
    private baseURL = "http://127.0.0.1:8080/bookabook";

    constructor(private http: HttpClient) { }

    setCrtUser(user: User) {
        this.crtUser = user;
    }

    getCrtUser() {
        return this.crtUser;
    }

    getAllUsers(): Observable<User[]> {
        let getURL = this.baseURL + "/getUsers";
        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get<User[]>(getURL, { headers: myheader });
    }

    deleteUser(user: User): Observable<any> {
        let url = this.baseURL + "/delete";
        let body = {
            userID: user.id
        }

        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<any>(url, body, {headers: myheader});
    }
}