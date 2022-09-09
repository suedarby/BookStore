import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

name: string = "Outlander";
author: string = "Dianna Gabaldon";
src: string = "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51PrW27sXWL.jpg";

isDisabled: boolean = false;

handleClick(){
  alert('I am working!')
};

  constructor() { }

  ngOnInit(): void {
  }

}
