import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublisherService } from '../publisher/publisher.service';
import { Message } from '../publisher/message';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  title = 'Book-A-Book';
  description = "This is Book A Book, You can rent or just read the perfect book!"

  constructor(private router: Router, private publisher: PublisherService) {

  }

  ngOnInit(){
    this.publisher.sendToChannel("hide-header", new Message("hide"));
  }

  loginBtnPress() {
    this.router.navigate(['/login']);
  }

  regBtnPress() {
      this.router.navigate(['/register']);
  }
}
