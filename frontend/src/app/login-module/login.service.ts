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
export class LoginService {

    loginUrl = "http://127.0.0.1:8080/bookabook/login";
    registerURL = "http://127.0.0.1:8080/bookabook/register";

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<User> {
        let body = {
            email: email,
            password: password
        }

        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<User>(this.loginUrl, body, {headers: myheader});
    }

    register(email: string, password: string, role:string): Observable<User> {
        let body = {
            email: email,
            password: password,
            role: role
        }

        const myheader = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<User>(this.registerURL, body, {headers: myheader});
    }
    
}