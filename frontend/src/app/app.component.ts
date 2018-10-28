import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { PublisherService } from './publisher/publisher.service';
import { Message } from './publisher/message';
import { UserService } from './login-module/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHeader = true;
  title = 'Book-A-Book';
  description = "This is Book A Book, You can rent or just read the perfect book!"

  constructor(private router: Router,
       private publisher: PublisherService,
       private cdr: ChangeDetectorRef,
        private userService: UserService)   {
    this.publisher.createChannel("hide-header");
  }

  ngOnInit(){
    this.publisher.subscribeToChannel("hide-header").subscribe((msg: Message) => {
      if (msg.Content === "hide"){
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }

      this.cdr.detectChanges();
    });
  }

}
