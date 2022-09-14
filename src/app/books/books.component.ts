import { Component, OnInit } from '@angular/core';
import { Book } from './../interface/book';
// moved to book.ts as an interface
// interface Book {

//   book: string,//whatever is here is the name of the array for ngFor
//   author : string,
//   image : string,

// }

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

//ngFor array
//DOUBLE CHECK all the brackets
//use this variable to do the bookName.author etc...
book : Book[] = [

{
  book : 'test', //this should match the interface name list
  author :'test',
  image : 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51PrW27sXWL.jpg'
},

{
  book: "outlander outlander outlander",
  author: "Dianna Gabaldon",
  image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51PrW27sXWL.jpg"

},

{
  book: " outlander box set",
  author: "Dianna Gabaldon",
  image: "https://images-na.ssl-images-amazon.com/images/I/51DE28Tk9qL._SY498_BO1,204,203,200_.jpg"
}

]

cart: Book[] = [];

addToCart(book:Book){
console.log(book)
};
//pipes



constructor() { }

  ngOnInit(): void {
  }
  // SHOWS THE STATIC VARIABLES

// name: string = "Outlander";
// author: string = "Dianna Gabaldon";
// src: string = "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51PrW27sXWL.jpg";


// name2 : string = " box set";
// author2: string = "Dianna Gabaldon";
// src2: string = "https://images-na.ssl-images-amazon.com/images/I/51DE28Tk9qL._SY498_BO1,204,203,200_.jpg";

// SETS A BUTTON TO FALSE
// isDisabled: boolean = false;
//  ALLOWS THE BUTTON TO BE DISABLED BY CLICKING ON IT
// handleClick(){
//   this.isDisabled = true;

// };

// TAKES INFO FROM THE INPUT BOX AND PRINTS IT IN THE P TAG
//one way binding
// myName:string='';

// handleInput(  event: any){
// this.myName = event.target.value;
// };

//two way binding
// mystuffName: string = "";

//ngIf
isShowing = true;

// if isShowing=true, then make it false and vice versa

// toggleBooks(){
//   this.isShowing =!this.isShowing;
// }

}
;
