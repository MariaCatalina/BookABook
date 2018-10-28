import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublisherService } from '../publisher/publisher.service';
import { Message } from '../publisher/message';
import { UserService } from '../login-module/user.service';
import { User } from '../login-module/user';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    model: any = {};
    users: User[];

    constructor(private router: Router,
        private publisher: PublisherService,
        private userService: UserService) {

    }
    ngOnInit() {
        this.getUsersList();
        this.publisher.sendToChannel("hide-header", new Message("show"));
    }

    getUsersList() {
        this.userService.getAllUsers().subscribe((response: User[]) => {
            this.users = response;
        });
    }

    deleteUser(user: User) {
        this.userService.deleteUser(user).subscribe((response: string) => {
            this.getUsersList();
        });
    }
}
