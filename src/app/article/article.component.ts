import {Component, Input} from '@angular/core';
import {Article} from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  host: {
    "class": "row"
  }
})
export class ArticleComponent {
  @Input() article: Article;

  public voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  public voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

}
