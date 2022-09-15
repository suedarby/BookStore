import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
constructor() { }

getBooks() {

  return [

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
}
}


//used to hold the single tasks that can be segregated from the component itself
// the ngIf behind the scenes  or the ngFor or the cart functions
//can be shared among ALL the components by input/output and export/import via injectible services to a component
//the crud calls to the database? sorting? filters?







