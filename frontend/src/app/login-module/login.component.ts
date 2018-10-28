import { Component, ViewChild, OnInit } from '@angular/core';
import { } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from './user';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-comp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    model: any = {};
    showError = false;
    constructor(private loginService: LoginService,
        private userService: UserService,
        private router: Router) {

    }
    ngOnInit() {
    }

    login() {
        this.loginService.login(this.model.username, this.model.password).subscribe((user: User) => {
            if (user == null) {
                this.showError = true;
            } else {
                this.userService.setCrtUser(user);
                if (user.role == "admin") {
                    this.router.navigate(['/administration']);
                } else {
                    this.router.navigate(['/dashboard']);
                }
            }
        });
    }
}