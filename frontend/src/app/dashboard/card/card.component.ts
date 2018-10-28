import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { BookModel } from '../addbook/BookModel';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponentComponent implements OnInit{
    model: any = {};
    @Input() bookModel: BookModel;

    constructor(){

    }
    ngOnInit() {
    }
}
