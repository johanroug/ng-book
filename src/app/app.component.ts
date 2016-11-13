import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`added ${title.value} and ${link.value}`);
    return false;
  }
}
