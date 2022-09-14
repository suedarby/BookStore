import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { from } from 'rxjs';
import { Book } from '../../interface/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit, OnDestroy {

@Input() book: Book = {} as Book;
@Output () bookEmitter = new EventEmitter<Book>();

myInterval: any = null;

addToCart(){
  // console.log(this.book);
  this.bookEmitter.emit(this.book);
}



constructor() { }

  ngOnInit(): void {
  this.myInterval = setInterval(() => {
    console.log('Hello')
      }, 1000)
  }


  ngOnDestroy(): void {
    // console.log({onDestroy:'This comes from the onDestroy function third'});
}

}
