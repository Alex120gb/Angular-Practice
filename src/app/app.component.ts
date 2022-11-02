import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice-app';
  test = '';

  sayhi(){
    this.test = "hi";
  };

  resetParagraph() {
    this.test = "";
    this.title = "";
  }

}
