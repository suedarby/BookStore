import { Component } from '@angular/core';

@Component({ //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//class
export class AppComponent {
  title = 'Book Store';
}
