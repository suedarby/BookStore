import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  // SHOWS THE STATIC VARIABLES

name: string = "Outlander";
author: string = "Dianna Gabaldon";
src: string = "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51PrW27sXWL.jpg";


name2 : string = " box set";
author2: string = "Dianna Gabaldon";
src2: string = "https://images-na.ssl-images-amazon.com/images/I/51DE28Tk9qL._SY498_BO1,204,203,200_.jpg";

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




  constructor() { }

  ngOnInit(): void {
  }

}
