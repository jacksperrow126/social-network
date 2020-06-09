import { ArticleDetail } from 'src/app/interface/interface';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-favorite-articles',
  templateUrl: './favorite-articles.component.html',
  styleUrls: ['./favorite-articles.component.css']
})
export class FavoriteArticlesComponent implements OnInit, OnChanges {
  articles: ArticleDetail[];
  show = 0;
  endPage: number;
  @Input() username: string;
  constructor(private userService: UserService) {}

  // Get favorite articles
  ngOnInit() {
    this.userService
      .getFavoriteArticle(this.username)
      .subscribe(favoArticle => {
        this.articles = favoArticle.articles;
        this.endPage = Math.floor(favoArticle.articlesCount / 20);
      });
  }

  // When current user change, update favorite articles
  ngOnChanges() {
    this.userService
      .getFavoriteArticle(this.username)
      .subscribe(favoArticle => {
        this.articles = favoArticle.articles;
        this.endPage = Math.floor(favoArticle.articlesCount / 20);
      });
  }

  // Pagination
  next() {
    this.show += 1;
    this.articles = undefined;
    this.userService
      .getFavoriteArticle(this.username, this.show * 20 + '')
      .subscribe(ele => {
        this.articles = ele.articles;
      });
  }

  // Pagination
  back() {
    this.show -= 1;
    this.articles = undefined;
    this.userService
      .getFavoriteArticle(this.username, this.show * 20 + '')
      .subscribe(ele => {
        this.articles = ele.articles;
      });
  }
}
