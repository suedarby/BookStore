import { Injectable } from '@angular/core';
import { Book } from '../interface/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

constructor() { }

cart: Array <Book> = [];

add(book: Book) {

  this.cart.push(book);

}
}
