import { Component, ViewChild, OnInit } from '@angular/core';
import { } from '@angular/forms';
import { PublisherService } from '../../publisher/publisher.service';
import { Message } from '../../publisher/message';
import { LoginService } from '../login.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'register-comp',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    model: any = {};
    showError = false;
    role = [
        { id: "1", name: "USer" }
    ];
    roles = [
        { id: 'user', name: 'User' },
        { id: 'admin', name: 'Admin' },
    ];

    constructor(private publisher: PublisherService,
        private loginService: LoginService,
        private userService: UserService,
        private router: Router) {


    }
    ngOnInit() {
        this.publisher.sendToChannel("hide-header", new Message("hide"));
    }

    register() {
        this.loginService.register(this.model.username, this.model.password, this.model.role).subscribe((user: User) => {
            if (user == null) {
                this.showError = true;
            } else {
                this.userService.setCrtUser(user);
                this.router.navigate(['/dashboard']);
            }
        });
    }

}