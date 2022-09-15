import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BooksComponent } from './books/books.component';
// import { BookComponent } from './books/book/book.component';
import { BooksService } from './books/books.service';
// import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';


@NgModule({ //decorator
  declarations: [	
    AppComponent,
,    // BookComponent,
      CartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ BooksService],
  bootstrap: [AppComponent] //only on app.component
})
export class AppModule { }
