import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../interface/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

//  @Input() [book: Book = {} as Book];
@Input() book: Book = {} as Book;
@Output () bookEmitter = new EventEmitter<Book>();
  constructor() { }

  ngOnInit() {
  }

  addToCart(){
    // console.log(this.book);
    this.bookEmitter.emit(this.book);
  }
}
