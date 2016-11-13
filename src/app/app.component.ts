import { Component } from '@angular/core';
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public articles: Article[];

  constructor() {
    this.articles = [
      new Article("johan", "http://yeahhoo.com"),
      new Article("Arendse", "http://sdfjoj.com", 7),
      new Article("Marie", "http://johno.com", 31)
    ];
  }

  public addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    this.articles.push( new Article(title.value, link.value) );
    title.value = "";
    link.value = "";
    return false;
  }
}
