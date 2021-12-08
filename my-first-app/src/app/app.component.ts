import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'] // below here can over ride the css style using backticks and css
  styles: [` 
      h3 {
        color: red;   
      }
    `]
})
export class AppComponent {
  
}
