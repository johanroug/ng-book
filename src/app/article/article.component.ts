import {Component} from '@angular/core';
import {Article} from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  host: {
    "class": "row"
  }
})
export class ArticleComponent {
  article: Article;

  constructor() {
    this.article = new Article(
      "Angular 2",
      "http://google.com",
      10);
  }

  public voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  public voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

}
