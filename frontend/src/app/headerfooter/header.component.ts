import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../login-module/user.service';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    appTitle = "Book-A-Book";
    adminUser = false;
    stars = "5";
    simpleUser = false;

    constructor(private router: Router, private userService: UserService) {

    }

    ngOnInit() {
        if (this.userService != undefined) {
            if (this.userService.getCrtUser() != undefined) {
                this.stars = this.userService.getCrtUser().stars;

                if (this.userService.getCrtUser().role == "Booker") {
                    this.adminUser = true;
                    this.simpleUser = true;
                }

                if (this.userService.getCrtUser().role == "User") {
                    this.simpleUser = true;
                }
                
            }
        }
    }

    addNewBook() {
        this.router.navigate(['/addnewbook']);
    }

    returnToDash() {
        this.router.navigate(['/dashboard']);
    }

    myBooksBooked() {
        this.router.navigate(['/booked']);
    }

    onLogout() {
        this.router.navigate(['/welcome']);
    }
}
